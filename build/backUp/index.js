"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var constant = require('./src/config/config');
var bodyParser = require("body-parser");
var routes_1 = __importDefault(require("./src/routes/routes"));
var dbConnection_1 = require("./src/db/dbConnection");
(0, dbConnection_1.connect)();
var app = express();
var port = 3000 || process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', routes_1.default);
app.get('/', function (req, res) {
    res.send("ping");
});
app.listen(port, function () {
    console.log(constant.SERVER_STARTED + " " + port);
});
