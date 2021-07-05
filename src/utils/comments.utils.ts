import { Comment } from '../models/comments.model';
const constant = require('../config/config')
var ObjectId = require('mongoose').Types.ObjectId;


function getCommentById(articleId: String) {
    return new Promise((resolve, reject) => {
        Comment.findOne({
            _id: new ObjectId(articleId)
        }, function (err: any, data: any) {
            if (err || !data)
                reject(err)
            else
                resolve(data)
        })
    })

}


function createComments(comments: any) {
    return new Promise((resolve, reject) => {
        Comment.create({
            comment: comments.comment,
            createdAt: new Date(),
            articleId: new ObjectId(comments.articleId)
        }, function (err: any, data: any) {
            if (err) {
                console.log(err)
                reject(err)
            }

            else {
                resolve(data)
            }


        })
    })

}
function createRecComments(comments: any) {
    new Promise((resolve, reject) => {
        try {
            Comment.findOne({ _id: new ObjectId(comments.commentId) }, (err: any, res: any) => {
                if (err || !res) {
                    reject(err)
                }
                res.recComments.push({
                    comment: comments.comment,
                    Date: new Date()
                })
                res.save((err: any, data: any) => {
                    if (err)
                        reject(err)
                    else
                        resolve(data)
                })


            })
        } catch (err) {
            reject( new Error(constant.ERROR.BAD_REQUEST))
        }
    })

}


module.exports = {
    createComments: createComments,
    createRecComments,
    getCommentById
}

