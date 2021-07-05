"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var comments_model_1 = require("../models/comments.model");
var constant = require('../config/config');
var ObjectId = require('mongoose').Types.ObjectId;
function getCommentById(articleId) {
    return new Promise(function (resolve, reject) {
        comments_model_1.Comment.findOne({
            _id: new ObjectId(articleId)
        }, function (err, data) {
            if (err || !data)
                reject(err);
            else
                resolve(data);
        });
    });
}
function createComments(comments) {
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
function createRecComments(comments) {
    new Promise(function (resolve, reject) {
        try {
            comments_model_1.Comment.findOne({ _id: new ObjectId(comments.commentId) }, function (err, res) {
                if (err || !res) {
                    reject(err);
                }
                res.recComments.push({
                    comment: comments.comment,
                    Date: new Date()
                });
                res.save(function (err, data) {
                    if (err)
                        reject(err);
                    else
                        resolve(data);
                });
            });
        }
        catch (err) {
            reject(new Error(constant.ERROR.BAD_REQUEST));
        }
    });
}
module.exports = {
    createComments: createComments,
    createRecComments: createRecComments,
    getCommentById: getCommentById
};
