const commentsUtil = require('../utils/comments.utils')
const commentConstant = require('../config/config')
import { Request, Response } from 'express';
var ObjectId = require('mongoose').Types.ObjectId;
import {sqlComments} from '../utils/comments.sql.utils';


export class commentController{

 createComments = async (req: Request, res: Response) => {
    try {
        let commentData = req.body;
        // let data = await commentsUtil.createComments(commentData)
        let data = await new sqlComments().createComments(commentData)
        res.status(commentConstant.STATUS_CODE.OK)
            .send(data)
    }
    catch (err) {
        console.log(err)
        res.status(commentConstant.STATUS_CODE.BAD_REQUEST)
            .send({
                status: commentConstant.STATUS_CODE.BAD_REQUEST,
                data: commentConstant.ERROR.BAD_REQUEST
            })
    }
}
 createRecComments=async (req: Request, res: Response) => {
    try {
        let commentData = req.body;
        // let _id=new ObjectId(commentData.commentId) 
        // let data = await commentsUtil.createRecComments(commentData)
        let data = await new sqlComments().createRecComments(commentData)
        
        res.status(commentConstant.STATUS_CODE.OK)
            .send({
                status: commentConstant.STATUS_CODE.OK,
                data:commentConstant.COMMENT.ADD
            })
    }
    catch (err) {
        console.log(err)
        res.status(commentConstant.STATUS_CODE.BAD_REQUEST)
            .send({
                status: commentConstant.STATUS_CODE.BAD_REQUEST,
                data: commentConstant.ERROR.BAD_REQUEST
            })
    }
}
 getCommentById = async (req: Request, res: Response) => {
    try {
        let reqData = req.query;
        // let data = await commentsUtil.getCommentById(reqData.id);
        let data = await new sqlComments().getCommentById(reqData.id);
        
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
}