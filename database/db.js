const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    "mongodb+srv://admin:root@sandbox-3mubc.mongodb.net/api?retryWrites=true",
    { useNewUrlParser: true }
  );
};

module.exports = {
  mongoose,
  connect
};
