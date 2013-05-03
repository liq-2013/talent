/**
 * 网站配置文件
 * @type {{}}
 */

var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

module.exports = {
    db: 'mongodb://localhost/talent',
    root: rootPath,
    app: {
        name: '京东达人秀'
    },
    admins: ["bjlaichendong"],
    isAdmin: function (userName) {
        return this.admins.toString().indexOf(userName) >= 0;
    }
};