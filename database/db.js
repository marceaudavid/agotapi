const mongoose = require("mongoose");

const connect = () => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(
      "mongodb+srv://admin:root@sandbox-3mubc.mongodb.net/api?retryWrites=true",
      { useNewUrlParser: true }
    )
    .then(() => console.log("Database Connected"));
};

module.exports = {
  mongoose,
  connect
};

