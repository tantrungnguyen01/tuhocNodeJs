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
                res.send('đăng nhập thành công')
            }else{
                res.redirect('back');
            }
        } catch (error) {
            next(error)
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
                res.json(login);
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