// models/Course.js
"use strict";

/**
 * Listing 17.6 (p. 249)
 * 새로운 스키마와 모델의 생성
 */
const mongoose = require("mongoose"),
  courseSchema = mongoose.Schema({
    _id:{
      type:String,
      required: true,
      unique: true,
    },
    title:{
      type:String,
      required: true,
    },
    description : {
      type: String,
      required:true
    },
    price:{
      type:Number,
      required:true,
      min:0
    },
    courseImg:{
      type:String
    }
  });
courseSchema.methods.getInfo= () =>{
  return `Title:${returntitle} Descripiton: ${this.description}`;
  };
  courseSchema.methods.findSamePrice =() => {
    return this.model("Course")
    .find({ price: this.price})
    .exec();
  };
  courseSchema.methods.findDiscountPrice =() => {
    return this.model("Course")
    .find({ price: { $lt: price}})
    .exec();
  };

//가상으로 course와 subscribers를 연결해주는이유는?
  courseSchema.virtual("subscribers",{
 ref: "Subscriber",
 localField: "_id",
 foreignField: "courses"
  });

  //객체 및 제이슨 가상속성
  courseSchema.set("toObject", {virtual:true});
  courseSchema.set("toJSON", {virtual:true});

module.exports = mongoose.model("Course", courseSchema);
