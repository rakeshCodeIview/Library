"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var articles_model_1 = require("../models/articles.model");
var constant = require('../config/config');
var ObjectId = require('mongoose').Types.ObjectId;
function pushArticle(articleData) {
    return new Promise(function (resolve, reject) {
        articles_model_1.Article.create({
            articleName: articleData.articleName,
            author: articleData.author,
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
function listAllArticle() {
    return new Promise(function (resolve, reject) {
        articles_model_1.Article.find({}, null, { limit: 20 }, function (err, data) {
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
    listAllArticle: listAllArticle
};
