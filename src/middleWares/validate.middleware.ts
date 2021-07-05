import { Request, Response, NextFunction } from 'express';
const constant = require('../config/config')

function validate(schema: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validate(req.body)
            next();
        }
        catch (err) {
            res.status(constant.STATUS_CODE.VALIDATION_ERROR)
                .json(err)

        }

    }
}
function validateGet(schema: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validate(req.query)
            next();
        }
        catch (err) {
            res.status(constant.STATUS_CODE.VALIDATION_ERROR)
                .json(err)

        }

    }
}

module.exports={
    validate,
    validateGet
}