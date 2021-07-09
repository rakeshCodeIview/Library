"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var articles_model_1 = require("../models/articles.model");
var constant = require('../config/config');
var ObjectId = require('mongoose').Types.ObjectId;
var mysql = require('mysql');
var chalk_1 = __importDefault(require("chalk"));
var connection = mysql.createConnection(constant.mySql.connection);
connection.connect(function (err) {
    if (err)
        console.log(err);
});
function sqlPushArticle(articleData) {
    return new Promise(function (resolve, reject) {
        var currDate = new Date().toISOString();
        var query = "INSERT INTO article(articleName,nickname,content ,createdAt) VALUES(\"" + articleData.articleName + "\",\"" + articleData.nickName + "\",\"" + articleData.content + "\",\"" + currDate + "\")";
        connection.query(query, function (err, result) {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
}
function sqlListArticle(articleId) {
    return new Promise(function (resolve, reject) {
        var query = "SELECT  * FROM article WHERE id=" + articleId;
        console.log(chalk_1.default.greenBright.bold(query));
        connection.query(query, function (err, result) {
            if (err)
                reject(err);
            else {
                resolve(result);
            }
        });
    });
}
function pushArticle(articleData) {
    return new Promise(function (resolve, reject) {
        articles_model_1.Article.create({
            articleName: articleData.articleName,
            nickName: articleData.nickName,
            content: articleData.content,
            createdAt: new Date()
        }, function (err, data) {
            if (err)
                reject(err);
            else {
                resolve(data);
            }
        });
        setTimeout(function () {
            resolve('resolved');
        }, 2000);
    });
}
function listArticle(articleId) {
    return new Promise(function (resolve, reject) {
        console.log(articleId);
        articles_model_1.Article.findOne({
            _id: new ObjectId(articleId)
        }, function (err, data) {
            if (err || !data)
                reject(err);
            else
                resolve(data);
        });
    });
}
function listAllArticle(page) {
    var pageSize = constant.PAGESIZE;
    var _page = parseInt(page);
    var _skip = (_page - 1) * pageSize;
    return new Promise(function (resolve, reject) {
        articles_model_1.Article.find({}, null, { skip: _skip, limit: pageSize }, function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}
function listComments(id_) {
    return new Promise(function (resolve, reject) {
        console.log(id_);
        articles_model_1.Article.aggregate([
            { $match: { _id: new ObjectId(id_) } },
            {
                $lookup: {
                    from: "comments",
                    localField: "_id",
                    foreignField: "articleId",
                    as: "articleComment"
                }
            }
        ]).exec(function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}
module.exports = {
    pushArticle: pushArticle,
    listArticle: listArticle,
    listAllArticle: listAllArticle,
    listComments: listComments,
    sqlPushArticle: sqlPushArticle,
    sqlListArticle: sqlListArticle
};
