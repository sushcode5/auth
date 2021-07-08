const authRouter = require("express").Router();
const passport = require("passport");

authRouter.get(
  "/",
  passport.authenticate("windowslive", {
    scope: [
      "openid",
      "profile",
      "offline_access",
      "https://outlook.office.com/Mail.Read",
    ],
  })
);

//callback route for outlook to redirect to
authRouter.get(
  "/redirect",
  passport.authenticate("windowslive", { failureRedirect: "/auth/login" }),
  function (req, res) {
    res.redirect("/auth/login/success");
  }
);

module.exports = authRouter;
