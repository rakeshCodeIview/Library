
import * as Yup from "yup"

let postCommentSchema = Yup.object().shape({

    comment:Yup.string().trim().max(200).required(),
    nickName:Yup.string().trim().max(20).required(),
    articleId:Yup.string().trim().length(24).required()
})
let recCommentSchema=Yup.object().shape({
    comment:Yup.string().trim().max(200).required(),
    nickName:Yup.string().trim().max(20).required(),
    commentId:Yup.string().trim().length(24).required()
})

module.exports = {
    postCommentSchema: postCommentSchema,
    recCommentSchema
}


