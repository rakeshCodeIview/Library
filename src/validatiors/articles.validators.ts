
import * as Yup from "yup"

let postArticleSchema = Yup.object().shape({
    author: Yup.string().required(),
    articleName: Yup.string().required(),
    desc: Yup.string().min(10).max(500).required()
})

let GetId = Yup.object().shape({
    id:Yup.string().trim().length(24).required()
})

module.exports = {
    postArticleSchema: postArticleSchema,
    GetId:GetId
}

