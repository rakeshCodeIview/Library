import { Router, Request, Response } from 'express';
const constant = require('../config/config')
var router = Router();
const articleControler = require('../controllers/articles.controllers')
const commentControler = require('../controllers/comments.controllers')
const validateMiddleware = require('../middleWares/validate.middleware')
const articleValidator = require('../validatiors/articles.validators')
const commentValidator = require('../validatiors/comments.validators')

router.get('/listArticles', articleControler.listArticle)
router.get('/listAllArticles', articleControler.listAllArticle)
router.get('/getCommentById',validateMiddleware.validateGet(articleValidator.GetId),commentControler.getCommentById)
router.get('/listComments',validateMiddleware.validateGet(articleValidator.GetId),articleControler.listComments)
router.post('/postArticles', validateMiddleware.validate(articleValidator.postArticleSchema), articleControler.pushArticle)
router.post('/createComments', validateMiddleware.validate(commentValidator.postCommentSchema), commentControler.createComments)
router.post('/createRecComments', validateMiddleware.validate(commentValidator.recCommentSchema), commentControler.createRecComments)








export default router;