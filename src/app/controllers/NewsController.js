const Course=require('../models/Course');
const { Multiple_mongoose_toObject_simple } = require('../../Utility/tools_mongoose');
class NewsController{

      index(red,res,next){
         Course.find({})
               .then(course=>{
                 
                  res.render('news',{ tintuc : Multiple_mongoose_toObject_simple(course) }); 
               })
               .catch(next);
      }
}
module.exports = new NewsController;
