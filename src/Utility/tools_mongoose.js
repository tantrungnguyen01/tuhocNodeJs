// ****|làm theo hướng cơ bản JavaScript es6|****

// const Multiple_mongoose_toObject_simple = function mongooseArray(mongooseArray){
//     return mongooseArray.map(mongoose => mongoose.toObject());
// }

// const mongoose_toObject_simple_single =function mongooseSingle(mongooseSingle){
//     return mongooseSingle ? mongooseSingle.toObject() : mongooseSingle;
// }

// module.exports = {
//     Multiple_mongoose_toObject_simple,
//     mongoose_toObject_simple_single
// };


// *****|làm theo cách rút gọn code optimize code|*****
module.exports = {
    Multiple_mongoose_toObject_simple : function (mongooseArray) {
        return mongooseArray.map(mongoose => mongoose.toObject());   
    },
    mongoose_toObject_simple_single : function (mongooseSingle) {
        return mongooseSingle ? mongooseSingle.toObject() : mongooseSingle;
    }
};
