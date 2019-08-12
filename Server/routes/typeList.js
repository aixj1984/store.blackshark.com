var express = require('express');
// var bodyParser = require('body-parser');
var router = express.Router();
const {
    find
} = require('../public/db');

// router.use(bodyParser.urlencoded({
//     extended: false
// }));


router.get('/find', (req, res, next) => {
   
    (async () => {
        let data = await find('goodType', null);
        res.send(data);
    })();
});
module.exports = router;