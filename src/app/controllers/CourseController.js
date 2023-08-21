const Course=require('../models/Course');
const { Multiple_mongoose_toObject_simple } = require('../../Utility/tools_mongoose');
class CourseController{
      // course/:slug
      show(req,res,next){
            Course.findOne({slug:req.params.slug}).then(key=>{
                  res.json(key)
            }).catch(next)
      }
}
module.exports = new CourseController;
