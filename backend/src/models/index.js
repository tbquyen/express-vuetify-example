const mongoose = require("mongoose");
const log = require("log4js").getLogger("mongoose");
mongoose.Promise = global.Promise;
mongoose.set("debug", (collectionName, method, query, options) => {
    log.debug(`${collectionName}.${method}`, JSON.stringify(query), options);
});

const db = {};
db.Logs = (data) => {
    log.debug(`result: ${JSON.stringify(data)});
};

db.mongoose = mongoose;

db.users = require("./user.model")(mongoose);

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
