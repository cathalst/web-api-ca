import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getMovie, getMovieRecommendations } from "../api/tmdb-api";
import PageTemplate from "../components/templateMoviePage";
import MovieDetails from "../components/movieDetails";
import Spinner from "../components/spinner";
import MovieList from "../components/movieList";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const MoviePage = () => {
  const { id } = useParams();

  // Fetch movie details
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["movie", { id }],
    queryFn: getMovie,
  });

  // Fetch recommended movies
  const {
    data: recsData,
    isPending: recsPending,
    isError: recsIsError,
  } = useQuery({
    queryKey: ["movieRecommendations", { id }],
    queryFn: getMovieRecommendations,
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  return (
    <>
      {data ? (
        <PageTemplate movie={data}>
          <MovieDetails movie={data} />

          {/* Recommended Movies Section */}
          {recsPending ? (
            <Spinner />
          ) : recsIsError ? (
            <h2>Could not load recommendations</h2>
          ) : (
            <>
              <h3 style={{ marginTop: "2rem", fontFamily: "arial" }}>Recommended Movies</h3>
              <MovieList
                movies={recsData.results}
                action={(movie) => <AddToFavoritesIcon movie={movie} />}
              />
            </>
          )}
        </PageTemplate>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
