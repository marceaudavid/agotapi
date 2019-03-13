const fs = require("fs");

const db = require("./db");
const { mongoose } = require("./db");

const Character = require("../models/character");
const House = require("../models/house");
const Place = require("../models/place");

fs.readFile("./database/places.json", (error, data) => {
  if (error) console.log(error);
  db.connect();
  Place.insertMany(JSON.parse(data))
    .then(place => console.log(place))
    .catch(err => console.log(err));
});
