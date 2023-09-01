//dùng để tạo thông báo vào handlesbar phải dùng locals
module.exports = function (req, res, next) {

    //console.log(req.session.token); kiểm tra xem bên login nó có lấy được token trong session không 

    var err = req.session.error;
    var msg = req.session.success;
    
    delete req.session.error;
    delete req.session.success;
    res.locals.message = '';

    res.locals.taikhoan =  req.session.token ; //lấy taikhoan gắn xuống view xuất ra thông tin người dùng

    if (err) res.locals.message = [err];
    if (msg) res.locals.message = [msg];
    // if (msg) res.locals.message = '<p class="msg_success">' + msg + '</p>';
    
    
    next();
}