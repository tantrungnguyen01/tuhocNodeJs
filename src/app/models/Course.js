const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify-mongoose');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
    name: { type:String , default:'hahaha'},
    description: { type:String , default: 'hông có ghi gì nên hông có gì ghi hết'},
    thumbails: { type:String , default:'https://png.pngtree.com/element_origin_min_pic/16/11/14/93ccc2f2036a54165fc88fdb31a446db.jpg'},
    videoId: { type:String,default:'y-67bCRIrg4'},
    slug: { type:String, slug:'name', unique: true},
  },{timestamps:true});

  //Add Plugin
  mongoose.plugin(slugify);
  Course.plugin(mongooseDelete,{overrideMethods:'all',deletedAt:true});

module.exports = mongoose.model('Course',Course);