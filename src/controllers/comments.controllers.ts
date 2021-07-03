const commentsUtil = require('../utils/comments.utils')
const Constant = require('../config/config')
async function createComments(commentsData: any) {
    try {
        const result = await commentsUtil.createComments(commentsData)

        return {
            status: Constant.STATUS_CODE.OK,
            data: result
        }
    }
    catch (err) {
        return {
            status: Constant.STATUS_CODE.BAD_REQUEST,
            data: err
        }

    }

}

module.exports = {
    createComments: createComments
}