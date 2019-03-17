const express = require("express");
const router = express.Router();

const Character = require("../models/character");

const Dao = require("../mongo/dao");

// Get all characters :
router.get("/", (req, res) => {
  Dao.getAllDocument(Character, req.queryç)
    .then(character => res.json(character))
    .catch(err => res.status(err.code).json(err.err));
});

// Get one character :
router.get("/:id", (req, res) => {
  Dao.getOneDocument(Character, req.params.id)
    .then(character => res.json(character))
    .catch(err => res.status(err.code).json(err.err));
});

// Add one character :
router.post("/", (req, res) => {
  Dao.addOneDocument(Character, req.body)
    .then(character => res.json(character))
    .catch(err => res.status(err.code).json(err.err));
});

// Update one character :
router.put("/:id", (req, res) => {
  Dao.updateOneDocument(Character, req.params.id, req.body)
    .then(character => res.json(character))
    .catch(err => res.status(err.code).json(err.err));
});

// Delete one character:
router.delete("/:id", (req, res) => {
  Dao.deleteOneDocument(Character, req.params.id)
    .then(character => res.json(character))
    .catch(err => res.status(err.code).json(err.err));
});

module.exports = router;
