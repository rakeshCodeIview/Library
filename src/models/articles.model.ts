import { Schema,model,Document } from "mongoose";


export interface article{
    articleName:string,
    nickName:string,
    createdAt:Date,
    content:String

}

export interface articleDocument extends Document,article{}

var articleSchema =new Schema({
    articleName:String,
    nickName:String,
    createdAt:Date,
    content:String
})

export var  Article=model<articleDocument>('Article',articleSchema)