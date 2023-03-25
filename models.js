import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  id: Number,
  text: String,
  answer: String,
});

export const questionModel = mongoose.model("Questions", questionSchema);
