import { Grid } from "@mui/material";
import Cards from "./customCards";
import Hero from "./hero";

function Homepage() {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Hero />
      </Grid>
      <Grid item xs={8} className="bg-primaryBlue min-h-full">
        <Grid container justifyContent="center">
          <Cards />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Homepage;
