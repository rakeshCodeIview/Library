import mongoose =require('mongoose')
const constant = require('../config/config')
// import mongoose from 'mongoose'

export function connect(){
    return mongoose.connect("mongodb://localhost:27017/library")
    .then(()=>{
        console.log(constant.DB.CONNECTED)
    })
}