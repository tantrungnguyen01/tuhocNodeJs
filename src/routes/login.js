const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/LoginController');
router.post('/login/:slug',loginController.postLogin)
router.get('/login',loginController.login)
router.post('/:slug',loginController.register);
router.get('/',loginController.index);

module.exports = router;