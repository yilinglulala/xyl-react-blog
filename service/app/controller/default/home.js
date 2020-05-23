'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'api接口';
  }
  async list(){
    const { ctx } = this;
    let result =await this.app.mysql.get('xyl_blog_content',{})
    console.log(result)
    ctx.body = result;
  }
  async getArticleList(){
    // FROM_UNIXTIME(a.addTime,%Y-%m-%d %H:%i:%s),a.view_count \
    let sql = 'SELECT a.id,a.title,a.introduce,a.typeid,b.typeName,\
      a.addTime\
      FROM xyl_article as a LEFT JOIN xyl_type as b ON a.typeId = b.id'

    const results = await this.app.mysql.query(sql)
    this.ctx.body={
        data:results
    }
  }

  async getArticleById(){
    console.log(this.ctx.params);
    
    let id = this.ctx.params.id
    let sql = 'SELECT a.id,a.title,a.content,a.typeid,b.typeName,\
    a.addTime\
    FROM xyl_article as a LEFT JOIN xyl_type as b ON a.typeid = b.id\
    WHERE a.typeid='+id
    const results = await this.app.mysql.query(sql)
    this.ctx.body={data:results}
  }

  async getTypeInfo() {
    const result = this.app.mysql.select('type')
    this.ctx.body = {data:result}
  }
}

 

module.exports = HomeController;


