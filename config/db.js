import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("✅MongoDB Connected Successfuly✅");
  } catch (error) {
    console.log("❌MongoDB connection failed❌", error.message);
    process.exit(1);
  }
};

export default connectMongo;
