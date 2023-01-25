const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema(
  {
    organization: { type: String, required: true },
    street: { type: String, required: true },
    block : { type: String, required: true },
    room: { type: Number, required: true },
    sharing : { type: Number, required: true },
    Image: { type: String, required: true },
    isActive :  { type: Boolean, required: true },
    Members: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "resident",
      required: true,
    }],
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("flat", flatSchema);
