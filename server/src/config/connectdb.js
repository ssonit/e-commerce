import mongoose from "mongoose";
import { MONGODB_URL } from "../utils/constants";

const connectdb = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected mongodb successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectdb;
