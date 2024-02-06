import { Grid } from "@mui/material";
import logo from "../assets/logo.png";
import HeroCard from "./hero-card";
import PrimaryButton from "./primaryButton";
import Rodape from "./rodape";
import SecondaryButton from "./secondarybutton";

function Hero() {
  return (
    <div className="flex flex-col justify-between h-full p-16 gap-4">
      <Grid item>
        <div className="w-full max-h-[75px] justify-center items-start inline-flex">
          <img className="min-w-[368px] min-h-[75px] rounded" src={logo} />
        </div>
      </Grid>
      <Grid item>
        <HeroCard />
      </Grid>
      <Grid item>
        <div className="flex flex-col justify-between space-y-6">
          <PrimaryButton>Login</PrimaryButton>
          <SecondaryButton>
            <span className="text-primaryBlue">Cadastro</span>
          </SecondaryButton>
        </div>
      </Grid>
      <Grid item>
        <Rodape />
      </Grid>
    </div>
  );
}

export default Hero;
