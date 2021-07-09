const mysql = require('mysql');
import chalk from 'chalk';
const mysqlConstant = require('../config/config')

export class mysqlDbConnection {
    connection: any;
    constructor() {
        this.connection = mysql.createConnection(mysqlConstant.mySql.connection);
    }
    async mysqlconnect() {
        this.connection.connect(function (err: any) {
            if (!!err)
                console.log(chalk.yellow.bgRed.bold(err));
            else
                console.log(chalk.whiteBright.bgBlue.bold('Database connected'));


        });
    }
    async Query(query:String){
        console.log(chalk.cyan(query));
        return new Promise((resolve,reject)=>{
            this.connection.query(query, (err: any, result: any) => {
                if (err)
                    reject(err)
                else
                    resolve(result)
            })
        })
        
    }
};

