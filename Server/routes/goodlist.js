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


/* GET users listing. */
router.get('/shop', function(req, res, next) {

  let name = req.query.name
  console.log(name);
  (async()=>{
      let data = await find("goodlist",{name:new RegExp(name)})
      if(data.length>0){
        res.send({data,isok:'yes'})
      }else{
        let data  = await find('goodlist')
        res.send({data,isok:'no'})
      }
  })()
  
});


router.get('/gid', function(req, res, next) {

 
  let tag = req.query.tag
  console.log(tag);
  (async()=>{
      let data = await find("goodlist",{tag})
      res.send(data)
  })()
  
});




module.exports = router;