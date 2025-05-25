import dotenv from 'dotenv';
import express from 'express';
import tasksRouter from "./api/tasks/index.js";
import cors from 'cors';
import moviesRouter from "./api/movies/index.js";
import usersRouter from "./api/users/index.js";
import reviewsRouter from "./api/reviews/index.js";
import authenticate from "./authenticate/index.js";

app.use("/api/reviews", reviewsRouter);

app.use('/api/movies', moviesRouter); 



dotenv.config();

const errHandler = (err, req, res, next) => {

  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

const app = express();
// Enable CORS for all requests
app.use(cors());

const port = process.env.PORT;


app.use(express.json());

app.use('/api/tasks', authenticate, tasksRouter);

//Users router
app.use('/api/users', usersRouter);



app.use(errHandler);


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
