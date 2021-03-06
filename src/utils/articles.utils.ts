import { Article } from '../models/articles.model';
const constant = require('../config/config')
var ObjectId = require('mongoose').Types.ObjectId;

function pushArticle(articleData: any) {
    return new Promise((resolve, reject) => {
        Article.create({
            articleName: articleData.articleName,
            nickName:articleData.nickName,
            content: articleData.content,
            createdAt: new Date()
        }, function (err, data) {
            if (err)
                reject(err)
            else {
                resolve(data)

            }
        })

        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
function listArticle(articleId: any) {
    return new Promise((resolve, reject) => {
        console.log(articleId)
        Article.findOne({
            _id: new ObjectId(articleId)
        }, function (err: any, data: any) {
            if (err || !data)
                reject(err)
            else
                resolve(data)
        })
    })

}

function listAllArticle(page: string) {
    let pageSize = constant.PAGESIZE;
    let _page = parseInt(page)
    let _skip = (_page - 1) * pageSize;
    return new Promise((resolve, reject) => {
        Article.find({}, null, { skip: _skip, limit: pageSize },
            function (err: any, data: any) {
                if (err)
                    reject(err)
                else
                    resolve(data)
            })
    })
}
function listComments(id_: string) {
    return new Promise((resolve, reject) => {
        console.log(id_)
        Article.aggregate([
            { $match: { _id: new ObjectId(id_) } },
            {
                $lookup: {
                    from: "comments",
                    localField: "_id",
                    foreignField: "articleId",
                    as: "articleComment"
                }

            }
        ]).exec((err, data) => {
            if (err)
                reject(err)
            else
                resolve(data)
        })

    })
}


module.exports = {
    pushArticle: pushArticle,
    listArticle: listArticle,
    listAllArticle: listAllArticle,
    listComments: listComments
}