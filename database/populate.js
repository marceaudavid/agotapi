const { mongoose } = require("./db");
const db = require("./db");
const fs = require("fs");
const Character = require("../models/character");
const Houses = require("../models/house");

fs.readFile("./database/characters.json", (error, data) => {
  if (error) console.log(error);
  db.connect();
  Character.insertMany(JSON.parse(data))
    .then(char => console.log(char))
    .catch(err => console.log(err));
  fs.readFile("./database/houses.json", (error, data) => {
    if (error) console.log(error);
    db.connect();
    Houses.insertMany(JSON.parse(data))
      .then(house => console.log(house))
      .catch(err => console.log(err));
  });
});
