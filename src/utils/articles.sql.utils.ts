
import { mysqlDbConnection } from '../db/mysqlDb.connection';

export class sqlarticles {

    async sqlPushArticle(articleData: any) {
        let currDate = new Date().toISOString();
        let query = `INSERT INTO article(articleName,nickname,content ,createdAt) 
                        VALUES("${articleData.articleName}","${articleData.nickName}","${articleData.content}","${currDate}")`;
        return await new mysqlDbConnection().Query(query)

    }
    async sqlListArticle(articleId: any) {
        let query = `SELECT  * FROM article WHERE id=${articleId}`;
        return await new mysqlDbConnection().Query(query);
    }
    async listComments(id_: any) {

        let query = `select * 
                        from article a,comments c
                        where a.id=c.articleId and a.id=${id_}`;
        return await new mysqlDbConnection().Query(query);

    }

    async ping() {
        console.log("hi")
    };

}