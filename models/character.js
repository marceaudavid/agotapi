const { mongoose } = require("../mongo/db");

const CharacterSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    born: {
      type: String
    },
    origin: {
      type: String
    },
    death: {
      type: String
    },
    status: {
      type: String,
      required: true
    },
    culture: {
      type: String,
      required: true
    },
    religion: {
      type: String
    },
    titles: [],
    house: {
      type: String
    },
    father: {
      type: String
    },
    mother: {
      type: String
    },
    spouse: {
      type: Array
    },
    children: {
      type: Array
    },
    siblings: {
      type: Array
    },
    lovers: {
      type: Array
    },
    seasons: {
      type: Array,
      required: true
    },
    actor: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
);

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
