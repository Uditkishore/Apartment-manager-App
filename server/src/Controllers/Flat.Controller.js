const express = require("express");

const router = express.Router();

const Flat = require("../models/flat.model");

router.post("", async (req, res) => {
  try {
    const flat = await Flat.create(req.body);
    return res.status(201).send(flat);
  } catch (error) {
    return res.send("flat Post error", error);
  }
});

router.get("", async (req, res) => {
  try {
    const flat = await Flat.find().populate().lean().exec();
    return res.status(201).send(flat);
  } catch (error) {
    return res.status(500).send(error.messege);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const flat = await Flat.findById(req.params.id).lean().exec();
    return res.status(201).send(flat);
  } catch (error) {
    return res.status(500).send(error.messege);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const flat = await Flat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(201).send(flat);
  } catch (error) {
    return res.status(500).send(error.messege);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const flat = await Flat.findByIdAndDelete(req.params.id);
    return res.status(201).send(flat);
  } catch (error) {
    return res.status(500).send(error.messege);
  }
});

module.exports = router;
