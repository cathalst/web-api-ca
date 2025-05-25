import React, { useState } from "react";
import { getTopRatedMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const TopRatedPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [page, setPage] = useState(1);

  const { data, error, isPending, isError } = useQuery({
    queryKey: ["toprated", page],
    queryFn: () => getTopRatedMovies(page),
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  let movies = data.results;
  if (searchQuery) {
    movies = movies.filter((m) =>
      m.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  if (genreFilter) {
    movies = movies.filter((m) => m.genre_ids.includes(parseInt(genreFilter)));
  }
  if (minRating > 0) {
    movies = movies.filter((m) => m.vote_average >= minRating);
  }

  return (
    <>
      <PageTemplate
        title="Top Rated"
        movies={movies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        genreFilter={genreFilter}
        setGenreFilter={setGenreFilter}
        minRating={minRating}
        setMinRating={setMinRating}
      />

      <Stack spacing={2} sx={{ alignItems: "center", mt: 4 }}>
        <Pagination
          count={data.total_pages > 500 ? 500 : data.total_pages}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
          shape="rounded"
        />
      </Stack>
    </>
  );
};

export default TopRatedPage;
