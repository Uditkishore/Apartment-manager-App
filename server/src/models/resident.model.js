const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

const residentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

residentSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

residentSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  var hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});


module.exports = mongoose.model("resident", residentSchema);
