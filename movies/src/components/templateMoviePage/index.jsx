import React from "react";
import { Typography, Box, Grid, Card, CardMedia, CardContent, Divider } from "@mui/material";

const TemplateMoviePage = ({ movie, children }) => {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh", py: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* poster on the left */}
        <Grid item xs={12} md={4}>
          <Card elevation={4} sx={{ maxWidth: 300, mx: "auto" }}>
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} //grabbing poster
              alt={movie.title}
            />
          </Card>
        </Grid>

        {/* movie content on the right */}
        <Grid item xs={12} md={7}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {movie.title}
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            {movie.overview}
          </Typography>

          <Divider sx={{ my: 2 }} />  {/* adds vertical spacing and a horizontal line between sections */}


          {/* children passed in — like MovieDetails or Credits */}
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default TemplateMoviePage;
