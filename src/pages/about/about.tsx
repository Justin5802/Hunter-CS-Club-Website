import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import WhatWeOffer from "./Components/WhatWeOffer";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      spacing={8}
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: isMobile ? "60px" : "0px" }}
    >
      <Grid item xs={12}>
        <Typography variant="h3" align="center" gutterBottom>
          About Us Page
        </Typography>
        {/* What we offer carosuel section */}
        <WhatWeOffer />
      </Grid>
    </Grid>
  );
};

export default About;
