
import * as Yup from "yup"

let postArticleSchema = Yup.object().shape({
    nickName: Yup.string().required(),
    articleName: Yup.string().required(),
    content: Yup.string().min(10).max(500).required()
})

let GetId = Yup.object().shape({
    id:Yup.string().trim().required()
})
let GetPage = Yup.object().shape({
    page:Yup.string().trim().max(5).required()
})

module.exports = {
    postArticleSchema: postArticleSchema,
    GetId:GetId,
    GetPage
}


