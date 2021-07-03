import { Comment } from '../models/comments.model';
const constant = require('../config/config')
var ObjectId = require('mongoose').Types.ObjectId;

function createComments(comments: any) {
    // console.log(comments)
    return new Promise((resolve, reject) => {
        Comment.create({
            comment: comments.comment,
            createdAt: new Date(),
            articleId: new ObjectId(comments.articleId)
        }, function (err: any, data: any) {
            if (err){
                console.log(err)
                reject(err)
            }
                
            else{
                resolve(data)
            }
                

        })
    })

}

module.exports={
    createComments:createComments
}

