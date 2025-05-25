
import React from "react";
import { Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem, Slider, Box, TextField } from "@mui/material";
//simplified the imports
const FilterCard = ({ genreFilter, setGenreFilter, minRating, setMinRating, searchQuery, setSearchQuery }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Filter Options
        </Typography>

        {/* search by title */}
        <TextField
          label="Search by title"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
          sx={{ mb: 3 }} // applies a bottom margin of spacing unit 3 using mui's sx prop
        />

        {/* genre Filter */}
        <FormControl fullWidth sx={{ mb: 4 }}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            value={genreFilter}
            label="Genre"
            onChange={(e) => setGenreFilter(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="28">Action</MenuItem>
            <MenuItem value="35">Comedy</MenuItem>
            <MenuItem value="18">Drama</MenuItem>
            <MenuItem value="27">Horror</MenuItem>
            <MenuItem value="10749">Romance</MenuItem>
            {/* renders dropdown, corresponding tmdb genreids */}
          </Select>
        </FormControl>

        {/* rating Slider */}
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Minimum Rating
          </Typography>
          <Slider
            value={minRating}
            onChange={(e, newValue) => setMinRating(newValue)}
            min={0}
            max={10}
            step={0.5}
            valueLabelDisplay="auto"
          />   
           {/* slider component to select a minimum rating between 0 and 10 in 0.5 steps */}
        </Box> 
      
      </CardContent>
    </Card>
  );
};

export default FilterCard;