'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index () {
        this.ctx.body = await this.app.mysql.get('blog_content', {});
    }

    async getArticleList () {
        let sql       = 'SELECT article.article_id as id,' +
          'article.title as title,' +
          'article.introduce as introduce,' +
          'FROM_UNIXTIME(article.add_time,\'%Y-%m-%d %H:%i:%s\' ) as addTime,' +
          'article.view_count as viewCount ,' +
          '.type.type_name as typeName ' +
          'FROM article LEFT JOIN type ON article.type_id = type.type_id';
        const results = await this.app.mysql.query(sql);
        this.ctx.body = {
            data: results
        };
    }

    async getArticleById () {
        //先配置路由的动态传值，然后再接收值
        let id  = this.ctx.params.id;
        let sql = 'SELECT article.article_id as id,' +
          'article.title as title,' +
          'article.introduce as introduce,' +
          'article.article_content as articleContent,' +
          'FROM_UNIXTIME(article.add_time,\'%Y-%m-%d %H:%i:%s\' ) as addTime,' +
          'article.view_count as viewCount,' +
          'type.type_name as typeName,' +
          'type.type_id as typeId ' +
          'FROM article LEFT JOIN type ON article.type_id = type.type_id ' +
          'WHERE article.article_id=' + id;

        const result  = await this.app.mysql.query(sql);
        this.ctx.body = {data: result};
    }

    //得到类别名称和编号
    async getTypeInfo () {
        const result  = await this.app.mysql.select('type');
        this.ctx.body = {data: result};
    }

    //根据类别ID获得文章列表
    async getListById () {
        let id        = this.ctx.params.id;
        let sql       = 'SELECT article.article_id as id,' +
          'article.title as title,' +
          'article.introduce as introduce,' +
          'FROM_UNIXTIME(article.add_time,\'%Y-%m-%d %H:%i:%s\' ) as addTime,' +
          'article.view_count as viewCount ,' +
          'type.type_name as typeName ' +
          'FROM article LEFT JOIN type ON article.type_id = type.type_id ' +
          'WHERE article.type_id=' + id;
        const result  = await this.app.mysql.query(sql);
        this.ctx.body = {data: result};

    }

}

module.exports = HomeController;
