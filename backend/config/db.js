import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://240118003_db_user:P8QYPRT8@cluster0.tipcuf3.mongodb.net/?appName=Cluster0")
    .then(() => { console.log("DB connected") })
    .catch((err) => { console.log("DB connection error:", err) });
};




// STEPS 
