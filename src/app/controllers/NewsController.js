const Course=require('../models/Course');
const { Multiple_mongoose_toObject_simple , mongoose_toObject_simple_single } = require('../../Utility/tools_mongoose');

class NewsController{

      // course/:slug
      show(req, res, next) {
            Course.findOne({ slug: req.params.slug })
                  .then(key => {res.render('courses/show', { course: mongoose_toObject_simple_single(key) })})
                  .catch(next)
      }

      index(red,res,next){
         Course.find({})
               .then(course=>{
                 
                  res.render('news',{ tintuc : Multiple_mongoose_toObject_simple(course) }); 
               })
               .catch(next);
      }
      
}
module.exports = new NewsController;
