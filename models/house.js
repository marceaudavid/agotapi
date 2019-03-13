const { mongoose } = require("../mongo/db");

const HouseSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    sigil: {
      type: String,
      required: true
    },
    words: {
      type: String,
      required: true
    },
    seat: {
      type: String,
      required: true
    },
    region: {
      type: String,
      required: true
    },
    vassals: {
      type: Array
    },
    founder: {
      type: String
    }
  },
  { versionKey: false }
);

const House = mongoose.model("House", HouseSchema);

module.exports = House;
