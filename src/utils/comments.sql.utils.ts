import{mysqlDbConnection} from '../db/mysqlDb.connection';


export class sqlComments{
    query:string;
    currDate:string;
    constructor(){
        this.query='';
        this.currDate=new Date().toISOString();
    }

    async createComments(comments: any){
        this.query=`insert into comments (createdAt,nickname,articleId,comment) VALUES("${this.currDate}","${comments.nickName}",${comments.articleId},"${comments.comment}")`;
        return await new mysqlDbConnection().Query(this.query)
    };

    async getCommentById(_id: any){
        this.query=`select * from comments where id=${_id}`;
        return await new mysqlDbConnection().Query(this.query)
    } 
    async createRecComments(comments: any){
        this.query=`insert into RecComments (createdAt,nickname,commentId,comment) VALUES("${this.currDate}","${comments.nickName}",${comments.commentId},"${comments.comment}")`;
        return await new mysqlDbConnection().Query(this.query)
    }
}