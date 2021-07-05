import mongoose =require('mongoose')
const constant = require('../config/config')
import  chalk from 'chalk';


export function connect(){
    const dbName=constant.MONGO.DB_NAME
    let dbUrl=`${constant.MONGO.DB_URL}${dbName}`;
    return mongoose.connect(dbUrl)
    .then(()=>{
        console.log(chalk.yellowBright.bgMagenta.bold(constant.DB.CONNECTED,":",dbUrl))
    })
}