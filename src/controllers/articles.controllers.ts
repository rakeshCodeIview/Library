const articleutil = require('../utils/articles.utils')
const constant = require('../config/config')
import { Request, Response } from 'express';

let pushArticle = async (req: Request, res: Response) => {
    try {
        let articleData = req.body
        let data = await articleutil.pushArticle(articleData);
        res.status(constant.STATUS_CODE.OK)
            .send(data)
    } catch (err) {
        res.status(constant.STATUS_CODE.BAD_REQUEST)
            .send({
                status: constant.STATUS_CODE.BAD_REQUEST,
                data: constant.ERROR.BAD_REQUES
                
            })
    }
}
let listArticle = async (req: Request, res: Response) => {
    try {
        let reqData = req.query;
        let data = await articleutil.listArticle(reqData.id);
        console.log(data)
        res.status(constant.STATUS_CODE.OK)
            .send(data)
    } catch (err) {
        res.status(constant.STATUS_CODE.BAD_REQUEST)
            .send({
                status: constant.STATUS_CODE.BAD_REQUEST,
                data: constant.ERROR.BAD_REQUEST
            })
    }
}
let listAllArticle = async (req: Request, res: Response) => {
    try {
        let page = req.query.page
        let data = await articleutil.listAllArticle(page);
        console.log(data)
        res.status(constant.STATUS_CODE.OK)
            .send(data)
    } catch (err) {
        res.status(constant.STATUS_CODE.BAD_REQUEST)
            .send({
                status: constant.STATUS_CODE.BAD_REQUEST,
                data: constant.ERROR.BAD_REQUEST
            })
    }
}

let listComments = async (req: Request, res: Response) => {
    try {
        let commentData = req.query;
        let data = await articleutil.listComments(commentData.id)
        res.status(constant.STATUS_CODE.OK)
            .send(data)
    }
    catch (err) {
        res.status(constant.STATUS_CODE.BAD_REQUEST)
            .send({
                status: constant.STATUS_CODE.BAD_REQUEST,
                data: constant.ERROR.BAD_REQUEST
            })
    }
}

module.exports = {
    pushArticle: pushArticle,
    listArticle: listArticle,
    listAllArticle: listAllArticle,
    listComments: listComments
}