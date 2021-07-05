import { Schema,model,Document } from "mongoose";


export interface comment{
    comment:String,
    createdAt:Date,
    nickName:string,
    recComments:[{
        comment:String,
        nickName:String,
        Date:Date
    }],
    articleId:Schema.Types.ObjectId

}

export interface commentDocument extends Document,comment{}

var commentSchema =new Schema({
    comment:String,
    createdAt:Date,
    nickName:String,
    recComments:[{
        comment:String,
        nickName:String,
        Date:Date
    }],
    articleId:Schema.Types.ObjectId
})

export var  Comment=model<commentDocument>('Comment',commentSchema)