const passport = require("passport");
const db = require("../models");
const Users = db.users;

const DEBUG = process.env.NODE_ENV === "development";

exports.login = async (req, res, next) => {
  const email = req.body.email;

  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.status(401);
      res.json({ message: "Cant login" });
      return;
    }
  })(req, res, next);

  res.status(200);
  res.json('{msg:"OK"}');
  return;
};

exports.logout = async (req, res, next) => {
  req.logout();
  res.send("OK");
};
