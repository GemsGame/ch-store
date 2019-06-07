const mongoose  = require("mongoose");
const {Charges} = require('../model/model.js');

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
   return Charges.find().skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit);
  }

  exports.search = (string) => {
    return Charges.find({ "name": { "$regex": string, "$options": "i" } }).limit(30);
  }

exports.input = (data) => {
  const charge =  new Charges( {
    name: data.name,
    description: data.description,
    category: data.category,
    model: data.model,
    price: data.price,
    img: data.img 
   });
    
   return charge.save();
}