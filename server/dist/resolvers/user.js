"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const User_entity_1 = require("../entities/User.entity");
const type_graphql_1 = require("type-graphql");
const constants_1 = require("../constants");
const sendEmail_1 = require("../utils/sendEmail");
let UserNamePasswordInput = class UserNamePasswordInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserNamePasswordInput.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserNamePasswordInput.prototype, "password", void 0);
UserNamePasswordInput = __decorate([
    (0, type_graphql_1.InputType)()
], UserNamePasswordInput);
let EmailInput = class EmailInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EmailInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EmailInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EmailInput.prototype, "message", void 0);
EmailInput = __decorate([
    (0, type_graphql_1.InputType)()
], EmailInput);
let FieldError = class FieldError {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "field", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    (0, type_graphql_1.ObjectType)()
], FieldError);
let UserResponse = class UserResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], UserResponse.prototype, "errors", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_entity_1.User, { nullable: true }),
    __metadata("design:type", User_entity_1.User)
], UserResponse.prototype, "user", void 0);
UserResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], UserResponse);
let UserResolver = class UserResolver {
    me(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, em }) {
            if (!req.session.userId) {
                return null;
            }
            const user = yield em.findOne(User_entity_1.User, { id: req.session.userId });
            return user;
        });
    }
    login(logInInput_1, _a) {
        return __awaiter(this, arguments, void 0, function* (logInInput, { em, req }) {
            const user = em.create(User_entity_1.User, {
                username: process.env.LOG_IN_USERNAME,
                password: process.env.LOG_IN_PASSWORD,
            });
            try {
                yield em.persistAndFlush(user);
            }
            catch (err) {
                console.log("message: ", err.message);
            }
            if (user.username !== logInInput.username) {
                return {
                    errors: [{ field: "username", message: "Wrong username" }],
                };
            }
            const valid = (yield (user.password === logInInput.password)) &&
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
        });
    }
    logout(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, res }) {
            return new Promise((resolve) => req.session.destroy((err) => {
                res.clearCookie(constants_1.COOKIE_NAME);
                if (err) {
                    console.log(err);
                    resolve(false);
                    return;
                }
                resolve(true);
            }));
        });
    }
    sendEmail(emailInput) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!emailInput.email) {
                throw new Error("You must enter an email");
            }
            if (!emailInput.message) {
                throw new Error("You must enter a message");
            }
            yield (0, sendEmail_1.sendEmail)(emailInput.email, emailInput.name, emailInput.message);
            return true;
        });
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, type_graphql_1.Query)(() => User_entity_1.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "me", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => UserResponse),
    __param(0, (0, type_graphql_1.Arg)("logInInput", () => UserNamePasswordInput)),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserNamePasswordInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "logout", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("emailInput", () => EmailInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EmailInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "sendEmail", null);
exports.UserResolver = UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
//# sourceMappingURL=user.js.map