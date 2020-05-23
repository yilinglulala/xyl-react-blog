/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1584112796462_7642';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  //数据库配置
  config.mysql = {
    // database configuration
    client: {
      // host
      host: '47.99.206.79',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'myblog',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  //跨域配置开始
  config.security={
    scrf:{
      enable:false,
      domainWhiteList:['*']
    }
  }
  config.cors={
    origin:'*',
    allowMethods:'GET,HEAD,PUST,POST,DELECT,PATCH,OPTIONS'
  }
  //跨域配置结束
  return {
    ...config,
    ...userConfig,
  };
};
