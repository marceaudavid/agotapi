const express = require("express");
const router = express.Router();

const Place = require("../models/place");

const Dao = require("../mongo/dao");

// Get all place :
router.get("/", (req, res) => {
  Dao.getAllDocument(Place, req.query)
    .then(place => res.json(place))
    .catch(err => res.status(err.code).json(err.err));
});

// Get one place :
router.get("/:id", (req, res) => {
  Dao.getOneDocument(Place, req.params.id)
    .then(place => res.status(200).json(place))
    .catch(err => res.status(err.code).json(err.err));
});

// Add one place :
router.post("/", (req, res) => {
  Dao.addOneDocument(Place, req.body)
    .then(place => res.send(place))
    .catch(err => res.status(err.code).json(err.err));
});

// Update one place :
router.put("/:id", (req, res) => {
  Dao.updateOneDocument(Place, req.params.id, req.body)
    .then(place => res.status(200).json(place))
    .catch(err => res.status(err.code).json(err.err));
});

// Delete one place:
router.delete("/:id", (req, res) => {
  Dao.deleteOneDocument(Place, req.params.id)
    .then(place => res.status(200).json(place))
    .catch(err => res.status(err.code).json(err.err));
});

module.exports = router;
