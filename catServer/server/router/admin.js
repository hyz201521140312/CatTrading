var express = require('express');
var mysql = require('mysql');
const bodyparser = require('body-parser');
var sqlConnect = require('../sqltool/mysqltool')
var adminRouter = express.Router();

adminRouter.get('/add', (req, res) => {
    // console.log(req.query);

    var sql1 = `INSERT INTO pets (class1,petname,sex,age,title,price,img1,info) VALUES ("${req.query.class1}","${req.query.petname}","${req.query.sex}","${req.query.age}","${req.query.title}","${req.query.price}","${req.query.img1}","${req.query.info}");`
    sqlConnect(sql1, function (data) {
        // console.log(data);
        res.send('ok')
    })

})

adminRouter.get('/alls', (req, res) => {
    var sql2 = 'SELECT * from pets;'
    sqlConnect(sql2, function (data) {
        // console.log(data);
        res.send(data);
    })
})

//注意——————————'/admin/search1'
adminRouter.get('/admin/search1', (req, res) => {
    var keyword = req.query.keyword;
    console.log(keyword);
    var sql3 = `SELECT  * FROM pets WHERE id=${keyword}`
    sqlConnect(sql3, function (data) {
        console.log(data)
        res.send(data);
    })
})

//修改
adminRouter.get('/updata', (req, res) => {
    var sql4 =
        `UPDATE pets SET class1="${req.query.class1}",petname="${req.query.petname}",sex="${req.query.sex}",age="${req.query.age}",title="${req.query.title}",price="${req.query.price}",img1="${req.query.img1}",info="${req.query.info}" WHERE id = ${req.query.id}`

    sqlConnect(sql4, (dbdata) => {

        console.log("数据库的操作结果====" + dbdata)
        res.redirect('/admin/admin_cz.html')
    })

})

//************************************************************************************************************************ */
adminRouter.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'content-type')
    next();
})


adminRouter.post('/adminlogin', (req, res) => {
    console.log(req.body);
    var sql1 = `select * from admin where adminname="${req.body.username}" and psw="${req.body.psw1}"`;
    sqlConnect(sql1, function (data) {
        console.log(data)
        if (data == '') {
            res.json({
                msg1: '用户名或密码错误'
            })
        }
        else {
            res.json({
                msg1: "登陆成功",
                myid: data[0].id
            })
        }

    })

})

adminRouter.get('/admininfo', (req, res) => {
    console.log(req.query);
    sql2 = `select * from admin where id="${req.query.userid}"`;
    sqlConnect(sql2, function (data) {
        res.send(data[0]);
    })
})



// 修改信息
adminRouter.post('/adminupdata', (req, res) => {
    console.log(req.body)
    var sql3 =
        `UPDATE admin SET adminname="${req.body.adminname}",sex="${req.body.sex}",phone="${req.body.phone}",mytitle="${req.body.mytitle}" WHERE id = ${req.body.id}`;
    sqlConnect(sql3, (data) => {
        console.log("数据库的操作结果====" + data);
        res.json({ msg3: '修改成功', myid: req.body.id })
    })
})

//修改密码
adminRouter.post('/adminupdatakey', (req, res) => {
    console.log(req.body)
    var sql4 =
        `UPDATE admin SET psw="${req.body.psw1}" WHERE id = ${req.body.id}`;
    sqlConnect(sql4, (data) => {
        console.log("数据库的操作结果====" + data);
        res.json({ msg4: '修改成功', myid: req.body.id })
    })
})


//添加猫咪种类
adminRouter.post('/addctaclass', (req, res) => {
    console.log(req.body);
    var sql5 = `INSERT INTO catclass (class1,pic,price1,price2) VALUES ("${req.body.class1}","${req.body.pic}","${req.body.price1}","${req.body.price2}");`
    sqlConnect(sql5, function (data) {
        console.log(data);
        res.json({ msg5: '添加成功' })
    })

})

//首页---阴影滑动效果接口
adminRouter.post('/classselect', (req, res) => {
    var sql6 = `select * from catclass`;
    sqlConnect(sql6, function (data) {
        res.send(data);
    })
})


adminRouter.post('/alluserinfo', (req, res) => {
    sql7 = `select * from user`;
    sqlConnect(sql7, function (data) {
        res.send(data);
    })
})





//管理员修改状态
adminRouter.post('/updatastate', (req, res) => {
    if (req.body.state == '通过') {
        // console.log(req.body);
        req.body.state = 0;
    }
    else if (req.body.state == '禁止') {
        req.body.state = 1;
    }
    var sql8 =
        `UPDATE user SET state=${req.body.state} WHERE id = ${req.body.id}`;
    sqlConnect(sql8, function (data) {

        res.send({ id: req.body.id, state: req.body.state });
        // res.redirect('/adminhome?id=1#usermanagement')
    })
})





//用户搜索
adminRouter.get('/usersearch', (req, res) => {
    console.log(req.query.keyw1)
    var sql9 = "select * from user where 1";
    if (req.query.keyw1 == '通过') {
        sql9 += ` and state=1`;
    }
    else if (req.query.keyw1 == '禁止') {
        sql9 += ` and state=0`;
    }
    else if (req.query.keyw1) {
        sql9 += " and shop like '%" + req.query.keyw1 + "%' or sex like '%" + req.query.keyw1 + "%' or username like '%" + req.query.keyw1 + "%' or id like '%" + req.query.keyw1 + "%' or cx like '%" + req.query.keyw1 + "%'";
    }
    sqlConnect(sql9, function (data) {
        // console.log(data);
        res.send(data);
    })

})

//商品管理查询
adminRouter.get('/goodssearch', (req, res) => {
    // console.log(req.query.keyw1)
    var sql = "select * from goods where 1";
    if (req.query.keyw1) {
        sql += " and class1 like '%" + req.query.keyw1 + "%' or shop like '%" + req.query.keyw1 + "%' or sexs like '%" + req.query.keyw1 + "%' or username like '%" + req.query.keyw1 + "%' or id like '%" + req.query.keyw1 + "%' or price like '%" + req.query.keyw1 + "%'";
    }
    sqlConnect(sql, function (data) {
        // console.log(data);
        res.send(data);
    })

})

// 管理员/卖家商品管理删除
adminRouter.post('/deletegoogd', (req, res) => {
    var sql = `DELETE FROM goods WHERE id=${req.body.id}`;
    sqlConnect(sql, function (data) {
        res.send('删除啦')
    })
})




//添加选猫知识
adminRouter.post('/addcatknowledges', (req, res) => {
    console.log(req.body);
    var sql10 = `INSERT INTO knowledge (title,pic,date1,number,info) VALUES ("${req.body.title}","${req.body.pic}","${req.body.date1}","${req.body.number}","${req.body.info}");`
    sqlConnect(sql10, function (data) {
        console.log(data);
        res.json({ msg5: '添加成功' })
    })

})



// 修改联系我们关于我们
adminRouter.post('/updatecontactus', (req, res) => {
    console.log(req.body)
    var sql =
        `UPDATE contactus SET title="${req.body.title}",title1="${req.body.title1}",address="${req.body.address}",tel="${req.body.tel}",email="${req.body.email}",email="${req.body.title2}" WHERE id = ${req.body.id}`;
    sqlConnect(sql, (data) => {
        console.log("数据库的操作结果====" + data);
        res.json({ msg3: '修改成功', myid: req.body.id })
    })
})


//关于我们联系我们-前台接口
adminRouter.get('/contactusall', (req, res) => {
    var sql = `select * from contactus`;
    sqlConnect(sql, function (data) {
        console.log(data)
        res.send(data);
    })
})


//选猫知识-前台接口
adminRouter.post('/catknowledges', (req, res) => {
    var sql11 = `select * from knowledge`;
    sqlConnect(sql11, function (data) {
        console.log('=========================')
        console.log(data)
        res.send(data);
    })
})




//前台---推荐接口
adminRouter.get('/goodszhanshi', (req, res) => {
    console.log(req.query.kw);
    var sql = `select * from goods`;
    if (req.query.kw == '推荐') {
        sql += ` limit 5`;
    }
    sqlConnect(sql, function (data) {
        console.log('=========================')
        console.log(data)
        res.send(data);
    })
})



//前台---商品详情接口
adminRouter.get('/xiangqing', (req, res) => {
    sql= `select * from goods where id="${req.query.kw1}"`
    if (req.query.kw1) {
        sqlConnect(sql, function (data) {
            console.log('=========================')
            console.log(data)
            res.send(data[0]);

        })
    }
})


//前台---品种详情
adminRouter.get('/pzxiangqing',(req,res)=>{
    sql= `select * from catclass where id="${req.query.kw1}"`
    if (req.query.kw1) {
        sqlConnect(sql, function (data) {
            console.log('=========================')
            console.log(data)
            res.send(data[0]);

        })
    } 
})   










//前台关于我们联系我们接口
adminRouter.get('/contatus', (req, res) => {
    var sql = `select * from contactus`;
    sqlConnect(sql, function (data) {
        res.send(data);
    })
})











// $tj_sql=" and (brand_name like '%$keyword%' or number like '%$keyword%' or groups  like '%$keyword%'  or repair_id in(SELECT AdminId FROM tb_admin where IsSuper = 3 and RealName like '%$keyword%'))";
// $sql="SELECT * FROM tb_zcbx where 1=1 $tj_sql ORDER BY id DESC  LIMIT $page,$rows";

















module.exports = adminRouter;