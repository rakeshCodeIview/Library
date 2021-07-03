"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
var mongoose = require("mongoose");
var constant = require('../config/config');
// import mongoose from 'mongoose'
function connect() {
    return mongoose.connect("mongodb://localhost:27017/library")
        .then(function () {
        console.log(constant.DB.CONNECTED);
    });
}
exports.connect = connect;
