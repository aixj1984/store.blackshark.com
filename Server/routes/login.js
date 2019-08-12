var express = require('express');
var router = express.Router();

const  {
    find,
    // 根据id查找
    ObjectId,
    add,
    updata,
    del
  } = require('../lib/db.js')

  var {
    createToken,
    decodeToken,
    checkToken
} = require('../lib/token');

/* GET users listing. */
router.post('/tel', function(req, res, next) {

   

   let {tel,pwd}=req.body
    console.log(tel);
    (async()=>{
        let data = await find("username",{tel,pwd})
        if(data.length>0){
           let token = createToken({pwd},1000)
         
           res.send({token,isok:'yes'})
        }else{
            res.send('no')
        }
    })()




});

router.post('/token',function(req,res,next){
    let token = req.body.token
//    console.log(token);
    let data =  decodeToken(token)
    // console.log(data);
  
      res.send(data)

  
 


})




module.exports = router;