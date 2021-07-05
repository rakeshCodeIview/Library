import express = require('express')
const constant = require('./src/config/config')
import bodyParser=require('body-parser')
import routes from './src/routes/routes'
import {connect} from './src/db/dbConnection';
import  chalk from 'chalk';

var app = express()
var port =constant.SERVER.PORT


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/api', routes)
app.get('/', function (req, res) {
    res.send("ping")
})
app.listen(port, () => {
    console.log(chalk.yellowBright.bgMagenta.bold(`${constant.SERVER_STARTED} : ${port}`))
    connect();
})
