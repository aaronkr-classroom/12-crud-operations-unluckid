// controllers/usersController.js
"use strict";

const User = require("../models/User"); // 사용자 모델 요청

// index 액션 정의
const index = (req, res) => {
  User.find({})
    .then((users) => {
      res.render("users/index", {
        users: users
      });
    })
    .catch((error) => {
      console.log(`Error fetching subscribers: ${error.message}`);
      res.redirect("/");
    });
};

// indexView 액션 정의
const indexView = (req, res) => {
  res.render("users/index");
};

// 객체 리터럴로 묶어서 내보내기
module.exports = {
  index: index,
  indexView: indexView
};
