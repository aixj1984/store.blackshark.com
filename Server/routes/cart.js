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
// 添加商品
router.post('/gid', function(req, res, next) {
    let tel = req.body.tel
    let tag = req.body.tag
    let num = req.body.num
    console.log(tel,tag,num);
    (async()=>{
        let data = await find('cart',{tel,tag})
        console.log(data);
        if(data.length>0){
            let upnum = data[0].num
            console.log (upnum);
            num =upnum*1 +num*1
            await updata('cart',{tel,tag},{num})
          
        }else{
            await add('cart',{tel,tag,num})
          
        }
        res.send('1')
    })()

  
});
//获取商品
router.get('/good', function(req, res, next) {

    let tel= req.query.tel
    console.log(tel);
    (async()=>{
        let data = await find('cart',{tel})
        // console.log(data);
        if(data.length>0){
            let arr = []
            
            for(let i =0;i<data.length;i++){
             let data1 =  await find('goodlist',{tag:data[i].tag})
          
                data1[0].num = data[i].num
                data1[0].isok = false
                console.log(data[i].num);
                arr.push(data1[0])
                
            }
            res.send(arr)
         
        }else{
            res.send('0')
        }
    })()
});
  

router.get('/num', function(req, res, next) {

        let num = req.query.num
        
        let tag = req.query.tag
        console.log(num,tag);
        (async()=>{
            await updata('cart',{tag},{num})
        })()

   
});


router.get('/del',function(req,res,next){
    let tag = req.query.tag
    let tel = req.query.tel
    console.log(tag,tel);
    (async()=>{
    let data  =  await del('cart',{tag,tel})
            console.log(data);
    })()






})


module.exports = router;
