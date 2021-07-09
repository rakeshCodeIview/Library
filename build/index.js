"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var constant = require('./src/config/config');
var bodyParser = require("body-parser");
var routes_1 = __importDefault(require("./src/routes/routes"));
var mysqlDb_connection_1 = require("./src/db/mysqlDb.connection");
var articles_sql_utils_1 = require("./src/utils/articles.sql.utils");
var chalk_1 = __importDefault(require("chalk"));
var app = express();
var port = constant.SERVER.PORT;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', routes_1.default);
app.get('/', function (req, res) {
    new articles_sql_utils_1.sqlarticles().ping();
    res.send("pong");
});
app.listen(port, function () {
    console.log(chalk_1.default.yellowBright.bgMagenta.bold(constant.SERVER_STARTED + " : " + port));
    new mysqlDb_connection_1.mysqlDbConnection().mysqlconnect();
    // connect();
});
