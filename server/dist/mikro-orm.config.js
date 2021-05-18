"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Story_entity_1 = require("./entities/Story.entity");
const path_1 = __importDefault(require("path"));
exports.default = {
    migrations: {
        path: path_1.default.join("/Users/annaliadestefano/personal/dundee-daily-news", "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Story_entity_1.Story],
    password: "serenity12",
    dbName: "DUNDEEDAILYDB",
    type: "mysql",
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map