const mongoose = require("mongoose");

const connect = callback => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(
      /* Atlas Url : */
      "mongodb+srv://admin:root@sandbox-3mubc.mongodb.net/api?retryWrites=true",
      /* Docker Url : */
      /* "mongodb://mongo:27017/api" */
      { useNewUrlParser: true }
    )
    .then(() => callback("Database Connected"))
    .catch(() => callback(null, "Connection Failed"));
};

module.exports = {
  mongoose,
  connect
};
