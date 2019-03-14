const fs = require("fs");

const db = require("./db");
const { mongoose } = require("./db");

const Character = require("../models/character");
const House = require("../models/house");
const Place = require("../models/place");
const Quote = require("../models/quote");

// Insert the data in the collections only if the collection is empty
const insert = (model, file) => {
  return new Promise((resolve, reject) => {
    model.countDocuments().then(count => {
      if (count <= 0) {
        fs.readFile(`./data/${file}.json`, (error, data) => {
          if (error) reject(error);
          model
            .insertMany(JSON.parse(data))
            .then(item => resolve(item))
            .catch(err => reject(err));
        });
      } else {
        resolve(`Collection ${file} is not empty`);
      }
    });
  });
};

// Exit node when all Promises have been resolved
async function populate() {
  await insert(Character, "characters");
  await insert(House, "houses");
  await insert(Place, "places");
  await insert(Quote, "quotes");
  process.exit();
}

// Connect to the database and populate it
db.connect((success, err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(success);
    populate();
  }
});
