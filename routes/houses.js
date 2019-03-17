const express = require("express");
const router = express.Router();

const House = require("../models/house");

const Dao = require("../mongo/dao");

// Get all houses :
router.get("/", (req, res) => {
  Dao.getAllDocument(House, req.query)
    .then(house => res.json(house))
    .catch(err => res.status(err.code).json(err.err));
});

// Get one house :
router.get("/:id", (req, res) => {
  Dao.getOneDocument(House, req.params.id)
    .then(house => res.json(house))
    .catch(err => res.status(err.code).json(err.err));
});

// Add one house :
router.post("/", (req, res) => {
  Dao.addOneDocument(House, req.body)
    .then(house => res.send(house))
    .catch(err => res.status(err.code).json(err.err));
});

// Update one house :
router.put("/:id", (req, res) => {
  Dao.updateOneDocument(House, req.params.id, req.body)
    .then(house => res.json({ status: "updated" }))
    .catch(err => res.status(err.code).json(err.err));
});

// Delete one house:
router.delete("/:id", (req, res) => {
  Dao.deleteOneDocument(House, req.params.id)
    .then(house => res.json({ status: "deleted" }))
    .catch(err => res.status(err.code).json(err.err));
});

module.exports = router;
