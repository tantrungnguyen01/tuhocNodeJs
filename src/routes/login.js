const express = require('express');
const router = express.Router();
const loginController = require('../app/controllers/LoginController');


router.post('/postLogin',loginController.postLogin)
router.get('/login',loginController.login)
router.post('/register',loginController.register);
router.get('/',loginController.index);

module.exports = router;