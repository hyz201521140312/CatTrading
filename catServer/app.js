var express=require('express');
var mysql=require('mysql');
const bodyparser=require('body-parser')
var router1=require('./server/router/admin')
var router2=require('./server/router/user')
var app=express();

//启用bodyparser
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.use(router1); 
app.use(router2);  
 


// app.use(express.static('./src/'))
app.listen(47,()=>{
    console.log('server is running')
})