const {
    MongoClient,
    ObjectId
} = require('mongodb');


//创建路径
const url = "mongodb://localhost:27017";

//设置连接的数据库
const dbName = "heisha";


const conn = () => {
    return new Promise((resolve, reject) => {

        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            if (err) {
                reject(err);
                throw err
            } else {
                resolve(client)
            }
        })
    })
}


//查找
const find = (table, params) => {
    return  new Promise( async(resolve, reject) => {
        let client = await conn();
        const db = client.db(dbName);
        const collection = db.collection(table);
          await  collection.find(params).toArray(function (err, docs) {
            if (err) {
                reject(err)
                throw err;
            } else {
                resolve(docs)
             
            }
        })
        // 关闭连接
        client.close();
    })    
}

//修改

const updata  = (table,params1,params2)=>{

    return new Promise (async(resolve,reject)=>{
        let client = await conn();
        const db = client.db(dbName);
        const collection = db.collection(table);
        collection.updateOne(params1,{$set:params2},function(err,result){
            if(err){
                reject(err);
                throw err
            }else{
                resolve(result)
            }
             // 关闭连接
            client.close();
        })

    })

}
//删除

const del = (table,params)=>{
    return  new Promise (async(resolve,reject)=>{
        let client = await conn();
        const db = client.db(dbName);
        const collection = db.collection(table);
        collection.deleteOne(params,function(err ,result){
            if(err){
                reject(err)
                throw err
            }else{
                resolve(result)
            }
              // 关闭连接
              client.close();
        })
    })
}

//增加 
const add = (table,params)=>{
    return new Promise (async(resolve,reject)=>{
        let client = await conn();
        const db = client.db(dbName);
        const collection = db.collection(table);
        collection.insert(params,function(err,result){
            if(err){
                reject(err)
                throw err
            }else{
                resolve(result)
            }
              // 关闭连接
              client.close();
        })
    })
}


//  排序   
const order = (col, params,type,way) => {
    return (new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        await collection.find(params).sort({[type]:way}).toArray(function (err, docs) {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        });
        // 关闭连接
        client.close();

    }))
}





  
// (async()=>{

//     let data =await find("cart",{tel:'18274204132',tag:'5'})
//     console.log(data);

// })()




module.exports = {
    find,
    // 根据id查找
    ObjectId,
    add,
    updata,
    del
}











