const fs = require("fs");

const db = require("./db");
const { mongoose } = require("./db");

const Character = require("../models/character");
const House = require("../models/house");
const Place = require("../models/house");

fs.readFile("./database/characters.json", (error, data) => {
  if (error) console.log(error);
  db.connect();
  Character.insertMany(JSON.parse(data))
    .then(char => console.log(char))
    .catch(err => console.log(err));
});

fs.readFile("./database/houses.json", (error, data) => {
  if (error) console.log(error);
  db.connect();
  House.insertMany(JSON.parse(data))
    .then(house => console.log(house))
    .catch(err => console.log(err));
});

fs.readFile("./database/places.json", (error, data) => {
  if (error) console.log(error);
  db.connect();
  Place.insertMany(JSON.parse(data))
    .then(place => console.log(place))
    .catch(err => console.log(err));
});
