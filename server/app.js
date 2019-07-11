const express = require("express");
const mysql = require("mysql");

// 连接数据库

const mydb = mysql.createConnection({
    localhost: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "h51904"
});

mydb.connect();

const app = express();

// 用中间件解决跨域问题

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})

app.get("/getEmployee", function (req, res) {
    var sql = "select * from e where 1";
    
    if(req.query.deptid){
         sql += "  AND  deptid LIKE '%"+req.query.deptid+"%'"

    }
    mydb.query(sql, function (err, results) {
        console.log()

        res.json(results)
    })

})

app.listen(8888, () => {
    console.log("成功开启服务器：8888")
})