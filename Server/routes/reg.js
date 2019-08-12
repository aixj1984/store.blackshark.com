var express = require('express');
var request = require('request');
var querystring = require('querystring');
var router = express.Router();

var nums = parseInt((Math.random()*900000)+100000)


const  {
    find,
    // 根据id查找
    ObjectId,
    add,
    updata,
    del
  } = require('../lib/db.js')


/* GET users listing. */
// 电话号码验证
router.post('/tel', function(req, res, next) {

    let tel = req.body.tel
    console.log(tel);
    (async()=>{
        let data = await find("username",{tel})
        console.log(data);
        if(data.length>0){
            res.send('no')
        }else{
            res.send('yes')
        }
    })()
 
});
// 短信验证
router.post('/xin',function(req,res,next){
    let tel = req.body.tel
    console.log(tel);
    var queryData = querystring.stringify({
        "mobile": tel,  // 接受短信的用户手机号码
        "tpl_id": "178645",  // 您申请的短信模板ID，根据实际情况修改
        "tpl_value": `#code#=${nums}`,  // 您设置的模板变量，根据实际情况修改
        "key": "7a6cafdf97515bfc8a878aee7022667c",  // 应用APPKEY(应用详细页查询)
      
    });

    var queryUrl = 'http://v.juhe.cn/sms/send?'+queryData;

    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // 打印接口返回内容
            
            var jsonObj = JSON.parse(body); // 解析接口返回的JSON内容
            res.send({jsonObj,nums})
            // console.log(jsonObj)
        } else {
            // console.log('请求异常');
            res.send('请求异常')
        }
    }) 



})

// 添加用户
router.post('/add', function(req, res, next) {
       
        let tel = req.body.tel
        let pwd = req.body.pwd
        console.log(tel,pwd);
        (async()=>{
            if(tel && pwd){
                let data = await add('username',{tel,pwd})
                console.log(data);
                res.send('yes')
            }else{
                res.send('no')
            }

        })()


});
  




module.exports = router;
