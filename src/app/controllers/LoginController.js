const Login = require('../models/Login');
const bcrypt = require('bcrypt');

class LoginController {

    async postLogin(req, res, next) {

        try {
            const user = await Login.findOne({email:req.body.email})
            if (!user) {
                res.redirect('back');
            }
            const math = await bcrypt.compare(req.body.password,user.password);
            if (math) {
                req.session.token = user;
                res.redirect('/tintuc')
            }else{
                res.send('mật khẩu không đúng');
            }
        } catch (error) {
            res.status(500)
        }

    }

    async register(req, res, next) {
        //res.json(req.body);
        try {
            const data = await Login.findOne({ email: req.body.email });
            if (data) {
                res.status(200).send('user đã tồn tại')
            } else {
                const login = new Login(req.body);
                await login.save();
                res.send('Đăng kí Thành Công');
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