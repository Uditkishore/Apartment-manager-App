const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema(
  {
    Type: { type: String, required: true },
    Block: { type: String, required: true },
    No: { type: Number, required: true },
    Image: { type: String, required: true },
    Members: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    }],
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("flat", flatSchema);
