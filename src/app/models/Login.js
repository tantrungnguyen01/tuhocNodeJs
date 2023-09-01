const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify-mongoose');
const bcrypt = require('bcrypt');


const Login = new Schema({
    email: { type: String, default: 'hahaha' },
    password: { type: String },
    age: { type: String, default: '18' },
    role:{ type: String ,default:'USER',unique:false},
    slug: { type: String, slug: 'email', unique: true },
}, { timestamps: true });

//Add plugin
mongoose.plugin(slugify);

// middleware băm mật khẩu của cầy măn-gút
Login.pre('save', async function (next) {
    //console.log('Other info:', this); 
    const user = this;
    if (user.isModified('password')) {
       user.password = await bcrypt.hash(user.password,8);
    }
   next();
})

//ẩn  password khi làm việc chung  mà gửi lên postman hoặc chuyển ra Json
Login.methods.toJSON = function(){
    const hiddenPassword = this.toObject();
    delete hiddenPassword.password;
    return hiddenPassword;
}


module.exports = mongoose.model('Login', Login);
