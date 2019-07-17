
//封装方法
function conentMysql1(sql, callback) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cats'
    });

    connection.connect();
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        callback(results)
    });

    connection.end();
}


module.exports = conentMysql1;