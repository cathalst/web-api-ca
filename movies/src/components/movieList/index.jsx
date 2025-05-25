import React from "react";
import Movie from "../movieCard";
import Grid from "@mui/material/Grid";

const MovieList = ({ movies, action }) => {
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3}>
      <Movie key={m.id} movie={m} action={action} />
    </Grid>
  ));
// renders each movie in a responsive grid column that adjusts across screen sizes
  return (
    <Grid container spacing={5}>
      {movieCards}
    </Grid>
  );
};

export default MovieList;
