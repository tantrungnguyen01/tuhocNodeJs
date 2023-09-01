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
            // Course.countDocumentsWithDeleted({deleted:true})
            //       .then((deletedCount)=>{
            //            console.log(deletedCount); //vì muốn đem xuống nhét vào  me/me  nó là bất đồng bộ nên khi thực thi đoạn code này nó chạy luôn 2 thằng không chờ thằng nào hết nên ta dùng Promise.all bỏ vào mảng chạy nhiều thằng mới được. 
            //       }).catch(()=>{});

            // Course.find({}).then((key)=>{
            //       res.render('me/me',{MestoreCourses:Multiple_mongoose_toObject_simple(model)})
            // }).catch(next)
            Promise.all([Course.find({}),Course.countDocumentsWithDeleted({deleted:true})])
                  .then(([key,deletedCount])=>{
                        res.render('me/me',{
                             deletedCount, // deletedCount:deletedCount, -->thay vì làm như vầy dùng kiến thức nâng cao enhanced object literal deletedCount là nó ra như bên dưới.  
                             MestoreCourses: Multiple_mongoose_toObject_simple(key) 
                        })
                  }).catch(next);
      }
      
}
module.exports = new MeController;