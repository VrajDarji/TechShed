import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String,
  tag: String,
  sale: Boolean,
  sale_price: Number,
});
// delete mongoose.connection.models["Data"];
const Data = mongoose.model("Data", dataSchema);
module.exports = Data;
