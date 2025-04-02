import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const mongoURI = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};
