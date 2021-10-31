var passport = require("passport");
const Users = require("../models").users;
var LocalStrategy = require("passport-local").Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(async function (email, done) {
  const data = await Users.find({email: email}).exec().catch();
  done(null, data);
});

//Passport register
passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passswordField: "password",
      passReqToCallback: true,
    },
    async function (req, email, password, done) {
      const data = await Users.findOne({email: email}).exec().catch();

      if (data && data.password === password) {
        return done(null, data);
      } else {
        return done(null, false);
      }
    }
  )
);
