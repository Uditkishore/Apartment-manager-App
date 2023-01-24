// user imports
require("dotenv").config();
const User = require("../models/register.model");
const jwt = require("jsonwebtoken");

const newToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  let token;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
    const user = await User.create(req.body);
    token = newToken(user);
    return res.status(200).json({ token: token });
  } catch (error) {
    return res.status(500).send("user Post error", error);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const match = user.checkPassword(req.body.password);
    if (!match)
      return res
        .status(400)
        .send({ message: "Please try another email or password" });
    const token = newToken(user);
    res.send({ user, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  register,
  login,
};
