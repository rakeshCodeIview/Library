const articleutil = require('../utils/articles.utils')
const constant = require('../config/config')

async function pushArticle(articleData: any) {
    try {
        const result = await articleutil.pushArticle(articleData);
        return {
            status: constant.STATUS_CODE.OK,
            data: result
        }
    }
    catch (err) {
        return {
            status: constant.STATUS_CODE.BAD_REQUEST,
            data: err
        }

    }
}
async function listArticle(id: any) {
    try {
        const result = await articleutil.listArticle(id);
        return {
            status: constant.STATUS_CODE.OK,
            data: result
        }
    }
    catch (err) {
        throw err
    }

}
async function listAllArticle(page: String) {
    try {
        const result = await articleutil.listAllArticle(page);
        return {
            status: constant.STATUS_CODE.OK,
            data: result
        }

    } catch (err) {
        throw err

    }
}
module.exports = {
    pushArticle: pushArticle,
    listArticle: listArticle,
    listAllArticle: listAllArticle
}