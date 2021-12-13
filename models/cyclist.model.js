const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  team: {
    type: String,
    required: [true, "team is required"],
  },
  bike: {
    type: String,
    required: [true, "bike is required"],
  },

  victories: {
    type: Number,
    required: [true, "number vistories is required"],
  },
});

const Cyclist = mongoose.model("Cyclist", schema);
module.exports = Cyclist;