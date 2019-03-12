const db = require('../database/db');
const argv = require('yargs').argv;
const express = require('express');
const { mongoose } = require('../database/db');
const objectID = mongoose.Types.ObjectId;
const bodyParser = require('body-parser');
const http = require('http');
const { character } = require('../models/character');

const app = express();

app.use(bodyParser.json());

db.connect();

    // Get list of characters :
    app.get('/character', (request, response) => {
        character.find().then(character => {
            response.json(character);
        })

    });

    // Delete one character by id :
    app.delete('/character/:id', (request, response) => {
        const { id } = request.params;

        if (!objectID.isValid(id)) {
            response.status(404).send();
        }
        character.findByIdAndRemove(id).then(character => {
            if (!character) {
                response.status(404).send();
            }
            response.send(character);
        });
        response.status(200).send(character);
    }, err => {
        response.status(500).send(err)
    });

    // Add one character :
    app.post('/character', (request, response) => {
        const newCharacter = new character(request.body);
        newCharacter.save().then(character => {
            response.send(character);

        });
    });

    //On récupère un argument pour définir le port, sinon port par défaut :
const port = argv._[0];
if (port != null && typeof port == 'number' && port > 0 && port <= 65535 && port % 1 == 0) {
    app.listen(port);
    console.log("Listening on port :", port);
} else {
    app.listen(3000);
    console.log("Listening on port : 3000");
}
