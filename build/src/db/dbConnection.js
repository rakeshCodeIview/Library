"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
var mongoose = require("mongoose");
var constant = require('../config/config');
var chalk_1 = __importDefault(require("chalk"));
function connect() {
    var dbName = constant.MONGO.DB_NAME;
    var dbUrl = "" + constant.MONGO.DB_URL + dbName;
    console.log(dbUrl);
    return mongoose.connect(dbUrl)
        .then(function () {
        console.log(chalk_1.default.yellowBright.bgMagenta.bold(constant.DB.CONNECTED, ":", dbUrl));
    });
}
exports.connect = connect;
