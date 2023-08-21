const mongoose = require('mongoose');
require('dotenv').config();// import kết nối  file .env

async function connect(){
    
    try {                                   
        await mongoose.connect(process.env.MONGODB_URI);
                            
        console.log('Connect với mongodb thành công');
    } catch (error) {
        console.log('Connect thất bại rồi !!!');
    }
 
}

module.exports = { connect };
