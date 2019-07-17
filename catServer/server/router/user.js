var express = require('express');
var mysql = require('mysql');
const bodyparser = require('body-parser');
var sqlConnect = require('../sqltool/mysqltool')
var userRouter = express.Router();



// userRouter.get('/alls', (req, res) => {
//     var sql2 = 'SELECT * from pets;'
//     sqlConnect(sql2, function (data) {
//         // console.log(data);
//         res.send(data);
//     })
// })



userRouter.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'content-type')
    next();
})

//启用bodyparser
// app.use(bodyparser.urlencoded({
//     extended: true
// }));
// app.use(bodyparser.json());

//用户注册
userRouter.post('/regs', (req, res) => {
    console.log(req.body);
    var sql = "select * from user where 1";
    if (req.body.username) {
        sql += " and username='" + req.body.username + "'";
    }
    sqlConnect(sql, function (data) {
        console.log(data)
        if (data.length > 0) {
            res.json({
                msg: 'username_is_already'
            })
        }
        else {
            let newsql = `insert into user(username,psw,sex,tel,email,birth,cx,shop,title) values("${req.body.username}","${req.body.psw1}","${req.body.sex}","${req.body.tel}","${req.body.email}","${req.body.birth}","${req.body.cx}","${req.body.shop}","${req.body.title}")`;
            sqlConnect(newsql, function (data) {
                res.json({
                    msg: 'reg_success'
                })
            })
        }
    })

})


//用户登录

userRouter.post('/logins',(req,res)=>{
    console.log(req.body);
    var sql1=`select * from user where username="${req.body.username}" and state=1`;
    sqlConnect(sql1,function(data){
        console.log(data)
        if(data==''){
            res.json({
                msg1:'该用户不存在'
            })
        }
        else{
        sql1+=` and psw="${req.body.psw1}"`
        sqlConnect(sql1,function(data){
            if(data==''){
                res.json({msg1:'密码错误'})
            }else{
                res.json(
                    {msg1:'登陆成功',
                    myid:data[0].id
            })
            }
        })
        }
          
    })

})
//个人信息查询
userRouter.get('/userinfo',(req,res)=>{
    console.log(req.query);
    sql2=`select * from user where id="${req.query.userid}"`;
    sqlConnect(sql2,function(data){
        res.send(data[0]);
    })
}) 

// 修改信息
userRouter.post('/updata',(req,res)=>{
    console.log(req.body)
    var sql3 =
    `UPDATE user SET username="${req.body.username}",sex="${req.body.sex}",tel="${req.body.tel}",email="${req.body.email}",birth="${req.body.birth}",cx="${req.body.cx}",shop="${req.body.shop}",title="${req.body.title}" WHERE id = ${req.body.id}`;
    sqlConnect(sql3, (data) => {
        console.log("数据库的操作结果====" + data);
        res.json({msg3:'修改成功',myid:req.body.id})
    })
     sql31=`UPDATE goods SET username="${req.body.username}",tel="${req.body.tel}",shop="${req.body.shop}" WHERE userid = ${req.body.id}`;
     sqlConnect(sql31, (data) => {
        // console.log("数据库的操作结果====" + data);
        // res.json({msg3:'修改成功',myid:req.body.id})
        console.log('goods表也修改成功')
    })
})

//修改密码
userRouter.post('/updatakey',(req,res)=>{
    console.log('===============')
    console.log(req.body)
    var sql4 =
    `UPDATE user SET psw="${req.body.psw1}" WHERE id = ${req.body.id}`;
    sqlConnect(sql4, (data) => {
        console.log("数据库的操作结果====" + data);
        res.json({msg4:'修改成功',myid:req.body.id}) 
    })
})
 

//添加商品
userRouter.post('/addgoods', (req, res) => {
    console.log(req.body);  
    var sql5 = `INSERT INTO goods (class1,pic,sexs,age,price,num,title1,username,tel,shop,info,userid) VALUES ("${req.body.class1}","${req.body.pic}","${req.body.sexs}","${req.body.age}","${req.body.price}","${req.body.num}","${req.body.title1}","${req.body.username}","${req.body.tel}","${req.body.shop}","${req.body.info}","${req.body.id}");`
    console.log('============================') 
    console.log(sql5)
    sqlConnect(sql5, function (data) {
        console.log(data);
        res.json({msg5:'添加成功'})
    })

})


//商品管理
//商品查询
userRouter.get('/usergoodsselect',(req,res)=>{
    var sql6=`select * from goods where userid="${req.query.userid}"`;
    sqlConnect(sql6,function(data){
        console.log(req.query.userid)
        res.send(data);
    })
})


//卖家商品修改
userRouter.post('/usergoodsupdata',(req,res)=>{
    sql=`UPDATE goods SET class1="${req.body.class1}",pic="${req.body.pic}",sexs="${req.body.sexs}",age="${req.body.age}",price="${req.body.price}",num="${req.body.num}",tel="${req.body.tel}",title1="${req.body.title1}",info="${req.body.info}" WHERE id = ${req.body.id}`;
    sqlConnect(sql,function(data){
        console.log(data)
        // res.send(data);
        res.json({ msg5: '修改成功' })
    })
})



module.exports = userRouter;