const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/brandy');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式loginSchema **************/
Schema = mongoose.Schema;
const loginSchema = mongoose.Schema({
    tel : String,
    name : String,
    pwd:String
});

/************** 定义模型Model **************/
const Models = {
    Login : mongoose.model('username',loginSchema)
}


// Models.username.find({name:'王剑锋'},(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data)
//     }
// })
