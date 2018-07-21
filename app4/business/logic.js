var db=require('../dao/db.js');
var path=require('path');
var fs=require('fs');
//day01
function day01(req,res,next){
  // var id=req.params.id;
  // console.log(typeof id);
  // console.log(req.params.id);
  switch(req.params.id){
    case '1':
      res.redirect('/work/day_01/vue起步.html');
      break;
    case '2':
      res.redirect('/work/day_01/vue起步2.html');
      break;
    case '3':
      res.redirect('/work/day_01/vue起步3.html');
      break;
    case '4':
      res.redirect('/work/day_01/vue起步4.html');
      break;
    case '5':
      res.redirect('/work/day_01/vue起步5.html');
      break;
    case '6':
      res.redirect('/work/day_01/vue起步.html');
      break;
    case '7':
      res.redirect('/work/day_01/vue起步.html');
      break;
    case '8':
      res.redirect('/work/day_01/vue起步.html');
      break;
    default:
      res.redirect('/404.html');
      // break;
  }
}



exports.day01=day01;