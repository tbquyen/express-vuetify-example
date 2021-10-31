const cors = require("cors");
const log4js = require("log4js");
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const history = require("connect-history-api-fallback");

require("dotenv").config();

log4js.configure({
  appenders: {
    out: { type: "stdout" },
    system: {
      type: "file",
      filename: "log/system.log",
      maxLogSize: 10485760,
      backups: 1,
      compress: true,
    },
    errors: {
      type: "file",
      filename: "log/errors.log",
      maxLogSize: 10485760,
      backups: 1,
      compress: true,
    },
    access: {
      type: "file",
      filename: "log/access.log",
      maxLogSize: 10485760,
      backups: 1,
      compress: true,
    },
    fileSystem: { type: "logLevelFilter", appender: "system", level: "all" },
    fileErros: { type: "logLevelFilter", appender: "errors", level: "error" },
  },
  categories: {
    default: { appenders: ["out", "fileSystem", "fileErros"], level: "all" },
    access: { appenders: ["out", "access"], level: "all" },
    mongoose: { appenders: ["out", "fileSystem"], level: "all" },
  },
});

const app = express();
app.use(
  log4js.connectLogger(log4js.getLogger("access"), {
    level: "auto",
    context: true,
    format: (req, res, format) =>
      format(
        `:referrer :remote-addr :method :url("body":${JSON.stringify(
          req.body
        )}) "params":${JSON.stringify(req.params)} "query":${JSON.stringify(
          req.query
        )} "session":${JSON.stringify(
          req.session
        )} => status/:status HTTP/:http-version :user-agent`
      ),
  })
);
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, path: "/" },
  })
);
app.use(cors());
app.use(history());
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

require("./src/plugins/passport.config");

const db = require("./src/models");
const { format } = require("morgan");
db.mongoose
  .connect(
    `mongodb://${process.env.MONGO_DOMAIN}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASSWORD,
    }
  )
  .then(() => {
    console.log(`Connected to the database!`);
  })
  .catch((err) => {
    console.log(`Cannot connect to the database!`, err);
    process.exit();
  });

require("./src/login/login.routes")(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404);
  res.send("page not found!");
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err;

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

// set port, listen for requests
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
