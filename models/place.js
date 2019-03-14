const { mongoose } = require("../mongo/db");

const PlaceSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    rulers: {
      type: String
    }
  },
  { versionKey: false }
);

const Place = mongoose.model("Place", PlaceSchema);

module.exports = Place;
