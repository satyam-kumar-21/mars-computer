import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const DB_URL = process.env.DB_URL;

export const databaseConnect = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
  }
};
