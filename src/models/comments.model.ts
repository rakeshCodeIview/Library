import { Schema,model,Document } from "mongoose";


export interface comment{
    comment:String,
    createdAt:Date,
    recComments:[{
        comment:String,
        Date:Date
    }],
    articleId:Schema.Types.ObjectId

}

export interface commentDocument extends Document,comment{}

var commentSchema =new Schema({
    comment:String,
    createdAt:Date,
    recComments:[{
        comment:String,
        Date:Date
    }],
    articleId:Schema.Types.ObjectId
})

export var  Comment=model<commentDocument>('Comment',commentSchema)