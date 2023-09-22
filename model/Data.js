import mongoose, { Collection } from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    img: String,
    tag: String,
    sale: Boolean,
    sale_price: Number,
  },
  { collection: "Data" }
);
// delete mongoose.connection.models["Data"];
const Data = mongoose.models.Data || mongoose.model("Data", dataSchema);
module.exports = Data;
