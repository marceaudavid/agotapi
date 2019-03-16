const yargs = require("yargs");
const argv = yargs.argv;

const express = require("express");
const app = express();

const db = require("./mongo/db");

// Connect to the database
db.connect((success, err) => {
  if (success) {
    console.log(success);
  } else {
    console.log(err);
  }
});

// Get the json space for prettify (default is 1)
const space = typeof argv.prettify === "number" && Number.isInteger(argv.prettify) ? argv.prettify : 1;

// Prettifying json
app.set("json spaces", space);

// Set up body parsing for json and query params
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes
app.use("/api/character", require("./routes/characters"));
app.use("/api/house", require("./routes/houses"));
app.use("/api/place", require("./routes/places"));
app.use("/api/quote", require("./routes/quotes"));
app.use("/api/quote/random", require("./routes/quotes"));

// Get the port specified in the port flag (default is 3000)
const port = typeof argv.port === "number" && Number.isInteger(argv.port) && (argv.port >= 0 && argv.port <= 65536) ? argv.port : 3000;

// Launch the express server
app.listen(port, () => console.log(`Running on http://localhost:${port}`));
