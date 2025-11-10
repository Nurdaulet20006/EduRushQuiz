import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://240118003_db_user:Nurik2012@cluster0.tipcuf3.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0");
    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
};

connectDB();
