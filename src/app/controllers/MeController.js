const Course = require('../models/Course');
const { Multiple_mongoose_toObject_simple } = require('../../Utility/tools_mongoose');

class MeController {
      // me/trash/course
      trash(req,res,next){
            Course.findWithDeleted({deleted:true})
            .then(key=>{
            
                  res.render('me/me_trash',{MestoreCourses: Multiple_mongoose_toObject_simple(key) })
            })
            .catch(next); 
      }
   
      // me/stored/course
      me(req, res, next) {
            Promise.all([Course.find({}),Course.countDocumentsWithDeleted({deleted:true})])
                  .then(([key,deletedCount])=>{
                        res.render('me/me',{
                             deletedCount,
                             MestoreCourses: Multiple_mongoose_toObject_simple(key) 
                        })
                  }).catch(next);
      }
      
}
module.exports = new MeController;