//dùng để tạo thông báo vào handlesbar phải dùng locals
module.exports = function (req, res, next) {

    var err = req.session.error;
    var msg = req.session.success;
    delete req.session.error;
    delete req.session.success;
    res.locals.message = '';
    if (err) res.locals.message = '<p class="msg_error">' + err + '</p>';
    if (msg) res.locals.message = '<p class="msg_success">' + msg + '</p>';

    next();
}