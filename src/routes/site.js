const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/trangchu/:slug',siteController.show);
router.get('/trangchu',siteController.index);
router.post('/timkiem',siteController.search);
router.get('/timkiem',siteController.search);
router.get('/',siteController.index);



module.exports=router;