import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://aidos_db_user:quizapp123@cluster0.zbkzpsa.mongodb.net/EduRush")
    .then(() => { console.log("DB connected") })
    .catch((err) => { console.log("DB connection error:", err) });
};