const { mongoose } = require('../database/db');

const character = mongoose.model('character', {
    name: {
        type: String,
        required : true
    },
    house : {
        type: String,
        required: true
    },
    living : {
        type: Boolean,
        required: true
    }
});

module.exports = { character };
