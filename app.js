const yargs = require("yargs");
const argv = yargs.argv;

const express = require("express");
const app = express();

const db = require("./mongo/db");

db.connect((success, err) => {
  if (success) {
    console.log(success);
  } else {
    console.log(err);
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import routes
app.use("/api/character", require("./routes/characters"));
app.use("/api/house", require("./routes/houses"));
app.use("/api/place", require("./routes/places"));
app.use("/api/quote", require("./routes/quotes"));

const port =
  typeof argv.port === "number" &&
  Number.isInteger(argv.port) &&
  (argv.port >= 0 && argv.port <= 65536)
    ? argv.port
    : 3000;

app.listen(port, () => console.log(`Listening on Port ${port}!`));
