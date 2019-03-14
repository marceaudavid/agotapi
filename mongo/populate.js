const fs = require("fs");

const db = require("./db");
const { mongoose } = require("./db");

const Character = require("../models/character");
const House = require("../models/house");
const Place = require("../models/place");
const Quote = require("../models/quote");

db.connect((success, err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(success);
    fs.readFile("./data/characters.json", (error, data) => {
      if (error) console.log(error);
      Character.insertMany(JSON.parse(data))
        .then(character => console.log(character))
        .catch(err => console.log(err));
    });

    fs.readFile("./data/houses.json", (error, data) => {
      if (error) console.log(error);
      House.insertMany(JSON.parse(data))
        .then(house => console.log(house))
        .catch(err => console.log(err));
    });

    fs.readFile("./data/places.json", (error, data) => {
      if (error) console.log(error);
      Place.insertMany(JSON.parse(data))
        .then(place => console.log(place))
        .catch(err => console.log(err));
    });

    fs.readFile("./data/quotes.json", (error, data) => {
      if (error) console.log(error);
      Quote.insertMany(JSON.parse(data))
        .then(quote => console.log(quote))
        .catch(err => console.log(err));
    });
  }
});
