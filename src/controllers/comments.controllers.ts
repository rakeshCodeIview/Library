const commentsUtil = require('../utils/comments.utils')
const commentConstant = require('../config/config')
import { Request, Response } from 'express';

let createComments = async (req: Request, res: Response) => {
    try {
        let commentData = req.body;
        let data = await commentsUtil.createComments(commentData)
        res.status(commentConstant.STATUS_CODE.OK)
            .send(data)
    }
    catch (err) {
        res.status(commentConstant.STATUS_CODE.BAD_REQUEST)
            .send({
                status: commentConstant.STATUS_CODE.BAD_REQUEST,
                data: commentConstant.ERROR.BAD_REQUEST
            })
    }
}
let createRecComments=async (req: Request, res: Response) => {
    try {
        let commentData = req.body;
        let data = await commentsUtil.createRecComments(commentData)
        res.status(commentConstant.STATUS_CODE.OK)
            .send({
                status: commentConstant.STATUS_CODE.OK,
                data:commentConstant.COMMENT.ADD
            })
    }
    catch (err) {
        res.status(commentConstant.STATUS_CODE.BAD_REQUEST)
            .send({
                status: commentConstant.STATUS_CODE.BAD_REQUEST,
                data: commentConstant.ERROR.BAD_REQUEST
            })
    }
}
let getCommentById = async (req: Request, res: Response) => {
    try {
        let reqData = req.query;
        console.log(reqData.id)
        let data = await commentsUtil.getCommentById(reqData.id);
        console.log(data)
        res.status(commentConstant.STATUS_CODE.OK)
            .send(data)
    } catch (err) {
        res.status(commentConstant.STATUS_CODE.BAD_REQUEST)
            .send({
                status: commentConstant.STATUS_CODE.BAD_REQUEST,
                data: commentConstant.ERROR.BAD_REQUEST
            })
    }
}
module.exports = {
    createComments: createComments,
    createRecComments,
    getCommentById
}