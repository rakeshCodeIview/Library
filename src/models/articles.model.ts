import { Schema,model,Document } from "mongoose";


export interface article{
    articleName:string,
    author:string,
    createdAt:Date

}

export interface articleDocument extends Document,article{}

var articleSchema =new Schema({
    articleName:String,
    author:String,
    createdAt:Date
})

export var  Article=model<articleDocument>('Article',articleSchema)