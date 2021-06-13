"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const core_1 = require("@mikro-orm/core");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const type_graphql_1 = require("type-graphql");
const story_1 = require("./resolvers/story");
const user_1 = require("./resolvers/user");
const ioredis_1 = __importDefault(require("ioredis"));
const express_session_1 = __importDefault(require("express-session"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const constants_1 = require("./constants");
const cors_1 = __importDefault(require("cors"));
console.log("process.env.CORS_ORIGIN", process.env.CORS_ORIGIN);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const orm = yield core_1.MikroORM.init(mikro_orm_config_1.default);
    yield orm.getMigrator().up();
    const app = express_1.default();
    const RedisStore = connect_redis_1.default(express_session_1.default);
    const redis = new ioredis_1.default(process.env.REDIS_URL);
    app.set("proxy", 1);
    app.use(cors_1.default({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }));
    app.use(express_session_1.default({
        name: "sauderkraut",
        store: new RedisStore({
            client: redis,
            disableTouch: true,
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
            httpOnly: true,
            sameSite: "lax",
            secure: constants_1.__prod__,
            domain: constants_1.__prod__ ? ".dundeedaily.news" : undefined,
        },
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET,
        resave: false,
    }));
    const server = new apollo_server_express_1.ApolloServer({
        schema: yield type_graphql_1.buildSchema({
            resolvers: [story_1.StoryResolver, user_1.UserResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ em: orm.em, req, res }),
    });
    const corsOptions = {
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    };
    server.applyMiddleware({
        app,
        cors: corsOptions,
    });
    app.listen(process.env.PORT, () => console.log("server ready at localhost:4000"));
});
main().catch((err) => console.error("err: ", err));
//# sourceMappingURL=index.js.map