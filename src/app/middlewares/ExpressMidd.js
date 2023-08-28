const express = require('express');
const app = express();
module.exports= function ExpressMiddleware(req,res,next){
  if (!req.session.user) {
  
  }
  next();
  
}
   
