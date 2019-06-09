const mongoose  = require("mongoose");
const {chargers} = require('../model/model.js');

exports.connection = () => {
  mongoose.connect(
    "mongodb+srv://connect_db:ete8vcg2n2wubLF@cluster0-bx6d2.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, dbName: "charges" },
    err => {
      if (err) throw err;
      console.log("connect success");
    }
  );
  }
  
  exports.pagination = (pageOptions) => {
   return chargers.find().skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit);
  }

  exports.search = (string) => {
    return chargers.find({ "name": { "$regex": string, "$options": "i" } }).limit(30);
  }

exports.input = (data) => {
  const charge =  new chargers( {
    name: data.name,
    description: data.description,
    category: data.category,
    model: data.model,
    price: data.price,
    img: data.img 
   });
    
   return charge.save();
}