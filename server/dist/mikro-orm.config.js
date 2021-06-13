"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const constants_1 = require("./constants");
const Story_entity_1 = require("./entities/Story.entity");
const path_1 = __importDefault(require("path"));
const User_entity_1 = require("./entities/User.entity");
console.log(process.env.MIKRO_ORM_USER, "process.env.MIKRO_ORM_USER");
exports.default = {
    migrations: {
        path: path_1.default.join("/Users/annaliadestefano/personal/dundee-daily-news/server/src", "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    clientUrl: process.env.DATABASE_DEFAULT_URL,
    entities: [Story_entity_1.Story, User_entity_1.User],
    password: "serenity12",
    dbName: "DUNDEEDAILYDB",
    type: "mysql",
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map