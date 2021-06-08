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
import { COOKIE_NAME } from "../constants";
import { sendEmail } from "../utils/sendEmail";

@InputType()
class UserNamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@InputType()
class EmailInput {
  @Field()
  email!: string;
  @Field()
  name!: string;

  @Field()
  message: string;
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
  async login(
    @Arg("logInInput", () => UserNamePasswordInput)
    logInInput: UserNamePasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    const user = em.create(User, {
      username: process.env.LOG_IN_USERNAME,
      password: process.env.LOG_IN_PASSWORD,
    });

    try {
      await em.persistAndFlush(user);
    } catch (err) {
      console.log("message: ", err.message);
    }

    if (user.username !== logInInput.username) {
      return {
        errors: [{ field: "username", message: "Wrong username" }],
      };
    }

    const valid =
      (await (user.password === logInInput.password)) &&
      user.username === logInInput.username;

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

  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }

        resolve(true);
      })
    );
  }

  @Mutation(() => Boolean)
  async sendEmail(
    @Arg("emailInput", () => EmailInput)
    emailInput: EmailInput
  ) {
    if (!emailInput.email) {
      throw new Error("You must enter an email");
    }

    if (!emailInput.message) {
      throw new Error("You must enter a message");
    }

    await sendEmail(emailInput.email, emailInput.name, emailInput.message);

    return true;
  }
}
