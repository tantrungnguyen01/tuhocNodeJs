//không được viết hoa  chữ  cái đầu function 
module.exports = function expressMiddleware(req, res, next) {
  

  if (req.session.token) {
    

    next();
  } else {
    req.session.error = 'Phải Đăng Nhập Thì Mới Được Vào';
    res.redirect('/index/login') //khai cứng nó là đằng trước "/" nó sẽ không mapping nhầm  
  }

  

}


