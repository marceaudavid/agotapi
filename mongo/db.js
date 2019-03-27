const mongoose = require("mongoose");

const connect = callback => {
  mongoose.Promise = global.Promise;
  const uri = process.env.DATABASE_URL || "mongodb://mongo:27017/api";
  mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => callback("Database Connected"))
    .catch(() => callback(null, "Connection Failed"));
};

module.exports = {
  mongoose,
  connect
};
