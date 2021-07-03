import { Router, Request, Response } from 'express';
const constant = require('../config/config')
var router = Router();
const articleControleer = require('../controllers/articles.controllers')
const commentControler = require('../controllers/comments.controllers')

router.get('/listArticles', async (req: Request, res: Response) => {
    try {
        let reqData = req.query;
        let data = await articleControleer.listArticle(reqData.id);
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


})

router.get('/listAllArticles', async (req: Request, res: Response) => {
    try {
        let page = req.query.page
        let data = await articleControleer.listAllArticle(page);
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


})
router.post('/postArticles', async (req: Request, res: Response) => {
    try {
        let articleData = req.body
        let data = await articleControleer.pushArticle(articleData);
        res.status(constant.STATUS_CODE.OK)
            .send(data)
    } catch (err) {
        res.status(constant.STATUS_CODE.BAD_REQUEST)
            .send({
                status: constant.STATUS_CODE.BAD_REQUEST,
                data: constant.ERROR.BAD_REQUEST
            })
    }

})

router.post('/createComments', async (req: Request, res: Response) => {
    try {
        let commentData = req.body;
        let data = await commentControler.createComments(commentData)
        res.status(constant.STATUS_CODE.OK)
            .send(data)
    }
    catch (err) {
        console.log(err)
        res.status(constant.STATUS_CODE.BAD_REQUEST)
            .send({
                status: constant.STATUS_CODE.BAD_REQUEST,
                data: constant.ERROR.BAD_REQUEST
            })
    }
})








export default router;