const Course = require('../models/Course');
const { Multiple_mongoose_toObject_simple } = require('../../Utility/tools_mongoose');

class MeController {
   
      // me/stored/course
      me(req, res, next) {
         Course.find()
         .then(key=>{
           
            res.render('me/me',{MestoreCourses: Multiple_mongoose_toObject_simple(key) })
        })
        .catch(next); 
      }
      
}
module.exports = new MeController;