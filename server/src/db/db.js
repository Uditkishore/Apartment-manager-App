const mongoose = require("mongoose");
require("dotenv").config();

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("connected to database sucsessfully");
  } catch (error) {
    console.log("db error", error);
  }
};
