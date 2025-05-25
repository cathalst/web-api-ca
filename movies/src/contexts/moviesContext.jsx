

import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [mustWatch, setMustWatch] = useState([]); // added mustWatch state
  const [myReviews, setMyReviews] = useState({});

  const addToFavorites = (movie) => {
    let newFavorites = favorites.includes(movie.id)
      ? [...favorites]
      : [...favorites, movie.id];
    setFavorites(newFavorites);
  };

  const addToPlaylist = (movie) => { 
    let newMustWatch = mustWatch.includes(movie.id)
      ? [...mustWatch]
      : [...mustWatch, movie.id];
    setMustWatch(newMustWatch);
    console.log("Must Watch list updated:", newMustWatch);
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter((mId) => mId !== movie.id));
  };

  const removeFromMustWatch = (movie) => { // added function to remove from Must Watch
    setMustWatch(mustWatch.filter((mId) => mId !== movie.id));
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        mustWatch, // provided mustWatch state
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToPlaylist, // renamed to match usage in AddToPlaylistIcon.jsx
        // removeFromMustWatch, //  Included remove function
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

