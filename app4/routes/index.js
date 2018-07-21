var express = require('express');
var router = express.Router();
// var fs=require('fs');
var logic=require('../business/logic.js');

router.get('/',function(req,res,next){
  res.redirect('index.html');
});
//学习资料
router.get('/day01/:id',logic.day01);

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.send('服务器测试1');
});





module.exports = router;
