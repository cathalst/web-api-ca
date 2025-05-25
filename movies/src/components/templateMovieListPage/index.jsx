import React from "react";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import FilterCard from "../filterMoviesCard";
import { Typography } from "@mui/material";

const TemplateMovieListPage = ({
  movies,
  title,
  action,
  searchQuery,
  setSearchQuery,
  genreFilter,
  setGenreFilter,
  minRating,
  setMinRating
}) => {
  return (
    <Grid container spacing={5} sx={{ padding: "20px" }}>

      {/* filter sidebar */}
      <Grid item xs={12} md={3}>
        <FilterCard
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          genreFilter={genreFilter}
          setGenreFilter={setGenreFilter}
          minRating={minRating}
          setMinRating={setMinRating}
        />
      </Grid>
{/* passing props to the filtercard component */}
      {/* Movie List Area */}
      <Grid item xs={12} md={9}>
        <Typography variant="h4" component="h2" gutterBottom>
          {title}
        </Typography>
        <MovieList action={action} movies={movies} />
      </Grid>
    </Grid>
  );
};

export default TemplateMovieListPage;
