const jwt = require("jsonwebtoken");
const Resident = require("../models/resident.model");


const newToken = (resident) => {
  return jwt.sign({ id: resident.id }, process.env.JWT_SECRET_KEY);
};

exports.register =  async (req, res) => {
  let token;
  try {
    console.log(req.body)
    const register = await Resident.create(req.body);
     // token = newToken(register);
    return res.status(200).send(register);
  } catch (error) {
    return res.status(500).send("register Post error", error);
  }
}

exports.login = async (req, res) => {
  try {
    const resident = await Resident.findOne({ email: req.body.email });
    const match = resident.checkPassword(req.body.password);
    if (!match)
      return res
        .status(400)
        .send({ message: "Please try another email or password" });
    const token = newToken(resident);
    res.status(200).send({ resident, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.residents = async (req, res) => {
  try {
    const resident = await Resident.find().populate().lean().exec();
    return res.status(201).send(resident);
  } catch (error) {
    return res.status(500).send(error.messege);
  }
};

exports.residentById = async (req, res) => {
  try {
    const resident = await Resident.findById(req.params.id).lean().exec();
    return res.status(201).send(resident);
  } catch (error) {
    return res.status(500).send(error.messege);
  }
};

exports.updateResident = async (req, res) => {
  try {
    const resident = await Resident.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(201).send(resident);
  } catch (error) {
    return res.status(500).send(error.messege);
  }
};

exports.deleteResident = async (req, res) => {
  try {
    const resident = await Resident.findByIdAndDelete(req.params.id);
    return res.status(201).send(resident);
  } catch (error) {
    return res.status(500).send(error.messege);
  }
};

module.exportss = exports;
