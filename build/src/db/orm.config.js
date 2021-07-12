"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var isCompiled = path_1.default.extname(__filename).includes('js');
exports.default = {
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "apple@123",
    database: process.env.DB_NAME || "OrmLir",
    synchronize: !process.env.DB_NO_SYNC,
    logging: !process.env.DB_NO_LOGS,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 2000,
    entities: [
        "src/entity/**/*." + (isCompiled ? "js" : "ts")
    ],
    migrations: [
        "src/migration/**/*." + (isCompiled ? "js" : "ts")
    ],
    cli: {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
    },
};
