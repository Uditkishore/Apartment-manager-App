const Flat = require("../models/flat.model");

exports.create = async (req, res) => {
  try {
    const flat = await Flat.create(req.body);
    return res.status(201).send(flat);
  } catch (error) {
    return res.send("flat Post error", error);
  }
};

exports.flats = async (req, res) => {
  try {
    const flat = await Flat.find().populate().lean().exec();
    return res.status(201).send(flat);
  } catch (error) {
    return res.status(500).send(error.messege);
  }
};
exports.flatById = async (req, res) => {
  try {
    const flat = await Flat.findById(req.params.id).lean().exec();
    return res.status(201).send(flat);
  } catch (error) {
    return res.status(500).send(error.messege);
  }
};

exports.updateFlat = async (req, res) => {
  try {
    const flat = await Flat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(201).send(flat);
  } catch (error) {
    return res.status(500).send(error.messege);
  }
};
exports.deleteFlat = async (req, res) => {
  try {
    const flat = await Flat.findByIdAndDelete(req.params.id);
    return res.status(201).send(flat);
  } catch (error) {
    return res.status(500).send(error.messege);
  }
};

