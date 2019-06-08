const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chargersSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  description:String,
  category: String,
  model:String,
  price:Number,
  img:String,
});

exports.chargers = mongoose.model("chargers", chargersSchema, 'chargers_30k');
