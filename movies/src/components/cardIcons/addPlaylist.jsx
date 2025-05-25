

import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToPlaylistIcon = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie); 
    console.log("Current Must Watch List:", context.mustWatch); //logging must watch list to console
    console.log("Added Movie:", movie.title, "with ID", movie.id); //logging must watch list to console
  };

  return (
    <IconButton aria-label="add to playlist" onClick={handleAddToPlaylistIcon}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;

