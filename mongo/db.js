const mongoose = require("mongoose");

const connect = callback => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(
      "mongodb+srv://admin:root@sandbox-3mubc.mongodb.net/api?retryWrites=true",
      { useNewUrlParser: true }
    )
    .then(() => callback("Database Connected"))
    .catch(() => callback(null, "Connection Failed"));
};

module.exports = {
  mongoose,
  connect
};
