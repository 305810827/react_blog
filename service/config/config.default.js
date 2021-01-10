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
    config.keys = appInfo.name + '_1610184313594_7735';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };
    config.mysql     = {
        // database configuration
        client: {
            // host
            host    : '42.192.72.63',
            // port
            port    : '3306',
            // username
            user    : 'root',
            // password
            password: 'root',
            // database
            database: 'my_blog'
        },
        // load into app, default is open
        app   : true,
        // load into agent, default is close
        agent : false
    };

    config.security = {
        csrf           : {
            enable: false
        },
        domainWhiteList: ['*']
    };
    config.cors     = {
        origin      : 'http://localhost:3001', //只允许这个域进行访问接口
        credentials : true,   // 开启认证
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    };

    return {
        ...config,
        ...userConfig
    };
};
