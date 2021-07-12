import express, {Request, Response} from "express";
const constant = require('./src/config/config')
import bodyParser=require('body-parser')
import routes from './src/routes/routes'
import {connect} from './src/db/dbConnection';
import {mysqlDbConnection} from './src/db/mysqlDb.connection';
import{sqlarticles} from './src/utils/articles.sql.utils';
import {TryDBConnect} from "./src/db/typeormdb.connection";
import  chalk from 'chalk';

var app:express.Application = express()
var port =constant.SERVER.PORT


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use(async (req: Request, res: Response, next) => {
    await TryDBConnect(() => {
      res.json({
        error: 'Database connection error, please try again later',
      });
    }, next);
  });

app.use('/api', routes)
app.get('/', function (req, res) {
    new sqlarticles().ping();
    res.send("pong")
})
app.listen(port, () => {
    console.log(chalk.yellowBright.bgMagenta.bold(`${constant.SERVER_STARTED} : ${port}`))
    // new mysqlDbConnection().mysqlconnect();
    // connect();
})
