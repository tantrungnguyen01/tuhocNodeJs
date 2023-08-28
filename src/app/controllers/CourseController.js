const Course = require('../models/Course');
const { mongoose_toObject_simple_single } = require('../../Utility/tools_mongoose');

class CourseController {
      // [POST] courses/handle-form-actions-restore -> submit checkbox lên và restore All lại
      handleFormActionRestore(req,res,next){
            //res.json(req.body);
            switch (req.body.actions) {
                  case "Restore":
                        Course.restore({_id:{$in:req.body.check_box}})
                              .then(()=>res.redirect('back'))
                              .catch(next);
                        break;
                  case "Destroy":
                        Course.deleteMany({_id:{$in:req.body.check_box}})
                              .then(()=>res.redirect('back'))
                              .catch(next);
                        break;      
                  default:
                        res.json({message:'Không Hợp Lệ'});
                        break;
            }
      }

      // [POST] courses/handle-form-actions -> submit checkbox lên
      handleFormAction(req,res,next){
            //res.json(req.body);
            switch (req.body.actions) {
                  case "delete":
                        Course.delete({_id:{$in:req.body.check_box}}) // * {_id:req.body.check_box} * như vầy sẽ không chạy được vì trong mongoDB vì nó là [ thì có nhiều] mà lại feild qua _id( chỉ có 1) -> giải pháp trong docs mongoDB có cái lọc list trong mảng thì nó sẽ lấy ra được
                              .then(()=>res.redirect('back'))
                              .catch(next);
                        break;
            
                  default:
                        res.json({message:'Không Hợp Lệ'});
                       break;
            }
      }

      // [DESTROY] courses/:_id/force 
      destroy(req, res, next) {
            Course.deleteOne({_id:req.params._id}).then(()=>res.redirect('back')).catch(next);
           
      }

      // [PATCH] courses/:_id/restore 
      restore(req, res, next) {
            Course.restore({_id:req.params._id}).then(()=>res.redirect('back')).catch(next);
           
      }

      // [DELETE] courses/:_id 
      delete(req, res, next) {
            Course.delete({_id:req.params._id}).then(()=>res.redirect('/me/stored/courses/')).catch(next);
           
      }
      // [PUT] courses/:_id 
      update(req, res, next) {
            //res.json(req.body)
            Course.updateOne({_id:req.params._id},req.body)
            .then(()=>res.redirect('/me/stored/courses/'))
            .catch(next);
      }
      // [EDIT] courses/:_id/edit
      edit(req, res, next) {
            // res.json(req.params)
            Course.findById({_id:req.params._id})
                  .then(key=>{res.render('courses/edit',{course:mongoose_toObject_simple_single(key)});
            })  
      }

      // [POST] courses/store
      store(req, res, next) {
            // res.json(req.body)
            const course = new Course(req.body);
            course.save().then(()=> res.redirect('/tintuc')).catch(error => {})
      }
      // [GET] courses/create
      create(req, res, next) {
            res.render('courses/create');
      }
      // course/:slug
      show(req, res, next) {
            Course.findOne({ slug: req.params.slug })
                  .then(key => {res.render('courses/show', { course: mongoose_toObject_simple_single(key) })})
                  .catch(next)
      }
}
module.exports = new CourseController;
