const express = require("express");

const router = express.Router();

const Resident = require("../models/resident.model");

router.post("", async (req, res) => {
  try {
    const resident = await Resident.create(req.body);
    return res.status(201).send(resident);
  } catch (error) {
    return res.send("resident Post error", error);
  }
});





router.get("", async (req, res) => {
  try {
    const resident = await Resident.find().populate().lean().exec();
    return res.status(201).send(resident);
  } catch (error) {
    return res.status(500).send(error.messege);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const resident = await Resident.findById(req.params.id).lean().exec();
    return res.status(201).send(resident);
  } catch (error) {
    return res.status(500).send(error.messege);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const resident = await Resident.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(201).send(resident);
  } catch (error) {
    return res.status(500).send(error.messege);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const resident = await Resident.findByIdAndDelete(req.params.id);
    return res.status(201).send(resident);
  } catch (error) {
    return res.status(500).send(error.messege);
  }
});

module.exports = router;
