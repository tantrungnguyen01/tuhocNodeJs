//không được viết hoa  chữ  cái đầu function  
function expressMiddleware(req, res, next) {
  if (req.session.token) {
    

    next();
  } else {
    req.session.error = 'Phải Đăng Nhập Thì Mới Được Vào';
    res.redirect('/index/login') //khai cứng nó là đằng trước "/" nó sẽ không mapping nhầm  
  }
}
//

// phân quyền user   
function permissionAll(req,res,next){
  const {role} = req.session.token // dùng cách nâng cao là enhanced object literal lấy thẳng  role  trong object của session
  if(role === 'USER' || role === 'ADMIN'){
    next();
  }else{
    req.session.error='Bạn Không Có Đủ Quyền Truy Cập Trang Này';
    res.redirect('back');
  }
}

function permissionAdmin(req,res,next){
  const {role} = req.session.token
  if(role === 'ADMIN'){
    next();
  }else{
    req.session.error='Bạn Không Có Đủ Quyền Truy Cập Trang Này';
    res.redirect('back');
  }
}

module.exports={
  expressMiddleware,
  permissionAll,
  permissionAdmin,
}


