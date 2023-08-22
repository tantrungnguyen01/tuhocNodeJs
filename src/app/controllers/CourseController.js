const Course = require('../models/Course');
const { mongoose_toObject_simple_single } = require('../../Utility/tools_mongoose');

class CourseController {

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
            Course.findOne({ slug: req.params.slug }).then(key => {
                  res.render('courses/show', { course: mongoose_toObject_simple_single(key) })
            }).catch(next)
      }
}
module.exports = new CourseController;
