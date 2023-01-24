const mongoose = require("mongoose");

const residentSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true, unique: true },
    Gender: { type: String, required: true },
    Age: { type: Number, required: true },
    flat_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "flat",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("resident", residentSchema);
