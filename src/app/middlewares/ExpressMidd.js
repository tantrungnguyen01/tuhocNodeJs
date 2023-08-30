module.exports = function ExpressMiddleware(req, res, next) {

  if (req.session.token) {

    return next();
  } else {
    
    return res.redirect('/index/login') //khai cứng nó là đằng trước "/" nó sẽ không mapping nhầm  
  }

}


