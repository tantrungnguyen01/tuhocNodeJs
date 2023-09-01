const express = require('express');
const router = express.Router();


const courseController = require('../app/controllers/CourseController');
router.post('/handle-form-actions-restore',courseController.handleFormActionRestore)
router.post('/handle-form-actions',courseController.handleFormAction) //vì nó đã có /course bên index.js rồi .nên mình đưa /handle-form-actions cho nó mapping với thằng bên index.js và vì sợ nó sẽ  map nhầm /:id nên đưa lên trên cùng 
router.post('/store',courseController.store);
router.get('/create',courseController.create);
router.get('/:_id/edit',courseController.edit);
router.patch('/:_id/restore',courseController.restore);//theo chuẩn restfull api nên dùng patch thông thường thì update
router.put('/:_id',courseController.update);//theo chuẩn restfull api nên dùng put thông thường thì post
router.delete('/:_id/force',courseController.destroy);//xóa thiệt luôn
router.delete('/:_id',courseController.delete);
// router.get('/:slug', courseController.show);




module.exports = router;