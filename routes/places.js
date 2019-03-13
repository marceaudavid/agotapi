const express = require("express");
const router = express.Router();

const Place = require("../models/place");

const Dao = require("../database/dao");

// Get all place :
router.get("/", (req, res) => {
  Dao.getAll(Place)
    .then(place => res.json(place))
    .catch(err => res.sendStatus(500));
});

// Get one place :
router.get("/:id", (req, res) => {
  Place.findOne({ _id: req.params.id })
    .then(place => res.status(200).json(place))
    .catch(err => res.sendStatus(500));
});

// Create one place :
router.post("/", (req, res) => {
  const place = new Place(req.body)
    .save()
    .then(place => res.send(place))
    .catch(err => res.sendStatus(500));
});

// Update one place :
router.put("/:id", (req, res) => {
  Place.updateOne({ _id: req.params.id }, req.body)
    .then(place => res.status(200).json(place))
    .catch(err => res.sendStatus(500));
});

// Delete one place:
router.delete("/:id", (req, res) => {
  Place.deleteOne({ _id: req.params.id })
    .then(place => res.status(200).json(place))
    .catch(err => res.sendStatus(500));
});

module.exports = router;
