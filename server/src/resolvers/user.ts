import { User } from "../entities/User.entity";
import { MyContext } from "src/types";
import {
  Resolver,
  Ctx,
  Arg,
  Mutation,
  InputType,
  Field,
  ObjectType,
  Query,
} from "type-graphql";
import argon2 from "argon2";

@InputType()
class UserNamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, em }: MyContext) {
    if (!req.session.userId) {
      return null;
    }

    const user = await em.findOne(User, { id: req.session.userId });
    return user;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("logInInput", () => UserNamePasswordInput)
    logInInput: UserNamePasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    if (logInInput.username.length <= 5) {
      return {
        errors: [
          {
            field: "username",
            message: "Length must be greater than 5",
          },
        ],
      };
    }

    if (logInInput.password.length <= 5) {
      return {
        errors: [
          {
            field: "password",
            message: "Length must be greater than 5",
          },
        ],
      };
    }

    const hashedPassword = await argon2.hash(logInInput.password);
    const user = em.create(User, {
      username: logInInput.username,
      password: hashedPassword,
    });

    try {
      await em.persistAndFlush(user);
    } catch (err) {
      console.log("message: ", err.message);
    }

    req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("logInInput", () => UserNamePasswordInput)
    logInInput: UserNamePasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    const user = await em.findOne(User, { username: logInInput.username });

    if (!user) {
      return {
        errors: [{ field: "username", message: "that username doesn't exist" }],
      };
    }

    const valid = await argon2.verify(user.password, logInInput.password);

    if (!valid) {
      return {
        errors: [{ field: "password", message: "incorrect password" }],
      };
    }

    req.session.userId = user.id;

    return {
      user,
    };
  }
}
