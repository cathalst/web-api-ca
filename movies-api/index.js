import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

//import tasksRouter from "./api/tasks/index.js";
import moviesRouter from "./api/movies/index.js";
import usersRouter from "./api/users/index.js";
import reviewsRouter from "./api/reviews/index.js";
import authenticate from "./authenticate/index.js";

// Load .env variables
dotenv.config();

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection error:", err));

// Init Express
const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
//app.use('/api/tasks', authenticate, tasksRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/users', usersRouter);
app.use('/api/reviews', reviewsRouter);

// Error handler
const errHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(500).send('Something went wrong!');
  }
  res.status(500).send(`You caught the error: ${err.stack}`);
};
app.use(errHandler);

// Start server
app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}`);
});
