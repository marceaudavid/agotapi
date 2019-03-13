const { mongoose } = require("./db");
const db = require("./db");
const fs = require("fs");
const Quote = require("../models/quote");

fs.readFile("./database/quotes.json", (error, data) => {
  if (error) console.log(error);
  db.connect();
  Quote.insertMany(JSON.parse(data)).then(quote => console.log(quote));
});
