const Course = require('../models/Course');
const { mongoose_toObject_simple_single } = require('../../Utility/tools_mongoose');

class CourseController {

      // [DELETE] courses/:_id 
      delete(req, res, next) {
            Course.deleteOne({_id:req.params._id}).then(()=>res.redirect('/me/stored/courses/')).catch(next);
           
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
