import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
      movieId: { type: Number, required: true }, // TMDb movie ID
  author: { type: String, required: true },  // could also use user._id
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Review", ReviewSchema);