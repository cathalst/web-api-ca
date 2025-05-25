import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieCredits } from "../../api/tmdb-api";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
} from "@mui/material";

// base url for tmdb profile images
const IMG_BASE = "https://image.tmdb.org/t/p/w185";

const CreditsList = ({ movieId }) => {
  // fetch credits (cast and crew) using react query
  const { data, error, isLoading } = useQuery({
    queryKey: ["credits", { id: movieId }],
    queryFn: getMovieCredits,
    enabled: !!movieId, // only run if movieId exists
  });

  // show loading text while data is being fetched
  if (isLoading) return <Typography>loading credits...</Typography>;

  // show error message if api call fails
  if (error) return <Typography color="error">error: {error.message}</Typography>;

  return (
    <Box mt={6}>
      {/* cast section */}
      <Typography variant="h5" gutterBottom>
        🎭 Cast
      </Typography>

      {/* grid for cast cards */}
      <Grid container spacing={3}>
        {/* limit to first 6 cast members */}
        {data.cast.slice(0, 6).map((person) => (
          <Grid item xs={12} sm={6} md={4} key={person.id}>
            {/* each cast member in a styled card */}
            <Card sx={{ display: "flex", boxShadow: 3, "&:hover": { boxShadow: 6 } }}>
              <CardMedia
                component="img"
                sx={{ width: 100 }}
                // use profile image or fallback
                image={
                  person.profile_path
                    ? `${IMG_BASE}${person.profile_path}`
                    : "/placeholder-profile.png"
                }
                alt={person.name}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {person.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  as {person.character}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* crew section */}
      <Box mt={6}>
        <Typography variant="h5" gutterBottom>
          🎬 Crew
        </Typography>

        {/* grid for crew cards */}
        <Grid container spacing={3}>
          {/* limit to first 4 crew members */}
          {data.crew.slice(0, 4).map((person) => (
            <Grid item xs={12} sm={6} md={4} key={person.id}>
              <Card sx={{ display: "flex", boxShadow: 3, "&:hover": { boxShadow: 6 } }}>
                <CardMedia
                  component="img"
                  sx={{ width: 100 }}
                  image={
                    person.profile_path
                      ? `${IMG_BASE}${person.profile_path}`
                      : "/placeholder-profile.png"
                  }
                  alt={person.name}
                />
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {person.name} 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {person.job}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CreditsList;
