"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var comments_model_1 = require("../models/comments.model");
var constant = require('../config/config');
var ObjectId = require('mongoose').Types.ObjectId;
function createComments(comments) {
    // console.log(comments)
    return new Promise(function (resolve, reject) {
        comments_model_1.Comment.create({
            comment: comments.comment,
            createdAt: new Date(),
            articleId: new ObjectId(comments.articleId)
        }, function (err, data) {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
module.exports = {
    createComments: createComments
};
