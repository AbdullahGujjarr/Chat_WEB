import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: process.env.MONGO_NAME,
    })
    .then(() => {
      console.log("DATABASE is Connected...");
    })
    .catch((err) => {
      console.log("Error while connected to DB", err);
      process.exit(1);
    });
};

export default connectDB;
