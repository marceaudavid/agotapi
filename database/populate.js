const { mongoose } = require("./db");
const db = require("./db");
const fs = require("fs");
const Character = require("../models/character");

fs.readFile("./database/characters.json", (error, data) => {
  if (error) console.log(error);
  db.connect();
  Character.insertMany(JSON.parse(data)).then(char => console.log(char));
});
