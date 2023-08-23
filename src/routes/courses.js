const express = require('express');
const router = express.Router();


const courseController = require('../app/controllers/CourseController');

router.post('/store',courseController.store);
router.get('/create',courseController.create);
router.get('/:_id/edit',courseController.edit);
router.put('/:_id',courseController.update);//theo chuẩn restfull api nên dùng put thông thường thì post
router.delete('/:_id',courseController.delete);
router.get('/:slug', courseController.show);




module.exports = router;