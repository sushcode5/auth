const loginRouter = require("express").Router();
const User = require("../models/userModel.js");

//redirected to /auth/login/success after Successful authentication
loginRouter.get("/success", function (req, res) {
  User.find({ useremail: { $ne: null } }, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        res.render("success", { username: foundUser[0].username });
      }
    }
  });
});

loginRouter.get("/", function (req, res) {
  res.render("login");
});

module.exports = loginRouter;
