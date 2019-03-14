const { mongoose } = require("../mongo/db");

const QuoteSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true
    },
    quote: {
      type: String,
      required: true
    },
    from: {
      type: String,
      required: true
    },
    to: {
      type: String
    },
    season: {
      type: Number,
      required: true
    },
    episode: {
      type: Number,
      required: true
    }
  },
  { versionKey: false }
);

const Quote = mongoose.model("Quote", QuoteSchema);

module.exports = Quote;
