const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type:String , default:'hahaha'},
    description: { type:String , default: 'hông có ghi gì nên hông có gì ghi hết'},
    thumbails:{ type:String , default:'https://png.pngtree.com/element_origin_min_pic/16/11/14/93ccc2f2036a54165fc88fdb31a446db.jpg'},
    create_time: { type:Date , default: Date.now},
    update_time: { type:Date  , default:Date .now},
  });

module.exports = mongoose.model('Course',Course);