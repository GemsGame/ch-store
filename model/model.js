const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chargesSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  description:String,
  category: String,
  model:String,
  price:Number,
  img:String,
});

exports.Charges = mongoose.model("Charges", chargesSchema, 'charges_30k');
