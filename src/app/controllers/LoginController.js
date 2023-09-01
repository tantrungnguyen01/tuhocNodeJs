const Login = require('../models/Login');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator'); // validator hiện thông báo ra view 

class LoginController {
    logout(req,res){
        req.session.destroy(()=>{
            
            res.redirect('login')
        })
    }

    async postLogin(req, res, next) {

        try {
            const user = await Login.findOne({email:req.body.email})
            if (!user) {
                req.session.error = 'Tài khoản Hoặc Mật Khẩu Không Tồn Tại';
                res.redirect('back');
            }
            const math = await bcrypt.compare(req.body.password,user.password);
            if (math) {
                req.session.token = user;
                res.redirect('/tintuc')

            }else{
                // res.send('mật khẩu không đúng');
                req.session.error = 'Sai Tài Khoản Hoặc Mật Khẩu';
                res.redirect('back');
            }
        } catch (error) {
            res.status(500)
        }

    }

    async register(req, res, next) {
        //res.json(req.body);
        try {
            // validate của express-validator
            await body('email').isEmail().withMessage('Email không hợp lệ').run(req);
            await body('password').isLength({min:6}).withMessage('Password phải từ 6 ký tự trở lên').run(req);
            await body('comfirmpassword').custom((value,{req})=>{
                return value === req.body.password;
            }).withMessage('Password không giống nhau').run(req);
            
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map(error => error.msg);
                req.session.error = errorMessages;
                return res.redirect('back');
            }
            // end validate của express-validator


            const data = await Login.findOne({ email: req.body.email });
            if (data) {
                // res.status(400).send('user đã tồn tại')
                req.session.error = 'User Này Đã Tồn Tại';
                res.redirect('back');
            } else {
                const login = new Login(req.body);
                await login.save();
                req.session.success='Đăng ký Tài KHoản Thành Công';
                res.redirect('back');
            }
        } catch (error) {
            next(error)
        }
    }

    login(req, res, next) {
       
        res.render('login')
    }

    index(req, res, next) {
        res.render('register')
    }

}
module.exports = new LoginController;