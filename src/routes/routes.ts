import { Router, Request, Response } from 'express';
const constant = require('../config/config')
var router = Router();
const validateMiddleware = require('../middleWares/validate.middleware')
const articleValidator = require('../validatiors/articles.validators')
const commentValidator = require('../validatiors/comments.validators')
import {commentController} from '../controllers/comments.controllers';
import {articleControler}from '../controllers/articles.controllers';

router.get('/listArticles',validateMiddleware.validateGet(articleValidator.GetId), new articleControler().listArticle)
router.get('/listAllArticles',validateMiddleware.validateGet(articleValidator.GetPage), new articleControler().listAllArticle)
router.get('/getCommentById',validateMiddleware.validateGet(articleValidator.GetId),new commentController().getCommentById)
router.get('/listCommentsByArticleId',validateMiddleware.validateGet(articleValidator.GetId),new articleControler().listComments)
router.post('/postArticles', validateMiddleware.validate(articleValidator.postArticleSchema), new articleControler().pushArticle)
router.post('/createComments', validateMiddleware.validate(commentValidator.postCommentSchema), new commentController().createComments)
router.post('/createRecComments', validateMiddleware.validate(commentValidator.recCommentSchema), new commentController().createRecComments)








export default router;