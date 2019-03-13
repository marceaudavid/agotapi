const yargs = require("yargs");
const argv = yargs.argv;

const express = require("express");
const app = express();

const db = require("./database/db");
db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import routes
app.use("/character", require("./routes/characters"));
app.use("/house", require("./routes/houses"));
app.use("/place", require("./routes/places"));

const port =
  typeof argv.port === "number" &&
  Number.isInteger(argv.port) &&
  (argv.port >= 0 && argv.port <= 65536)
    ? argv.port
    : 3000;

app.listen(port, () => console.log(`Listening on Port ${port}!`));
