import express from "express";
import Review from "./reviewModel.js";

const router = express.Router();

// GET all reviews
router.get("/", async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
});

// GET reviews for a specific movie
router.get("/movie/:id", async (req, res) => {
  const movieId = parseInt(req.params.id);
  const reviews = await Review.find({ movieId });
  res.json(reviews);
});

// POST a new review
router.post("/", async (req, res) => {
  const { movieId, author, content } = req.body;
  if (!movieId || !author || !content) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const review = new Review({ movieId, author, content });
  await review.save();
  res.status(201).json(review);
});

export default router;
