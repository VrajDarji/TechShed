import mongoose from "mongoose";

let con = false;

export const ConnectToDB = async () => {
  if (con) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("connected");
    con = true;
  } catch (err) {
    console.log(err);
  }
};
