import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PrimaryButton from "./primaryButton";
import { Grid } from "@mui/material";

type Props = {
  data: string;
  titulo: string;
  categoria: string;
  selected?: boolean;
};

const resultado = (
  <div className="text-green800 bg-green100 p-1 rounded font-sans">
    Resultado
  </div>
);
const edital = (
  <div className="text-red800 bg-red100 p-1 rounded font-sans">Edital</div>
);

export default function OutlinedCard({
  data,
  titulo,
  categoria,
  selected = false,
}: Props) {
  const card = (
    <React.Fragment>
      <CardContent sx={{ padding: "0.2em" }}>
        <Typography
          sx={{ fontSize: "0.7em" }}
          color="text.secondary"
          gutterBottom
        >
          {`Date limite: ${data}`}
        </Typography>
        <Grid>
          <Typography
            className="self-stretch text-black text-[1.5em] font-bold font-['Inter'] capitalize"
            sx={{ alignSelf: "stretch", fontWeight: "bold" }}
          >
            ADENDO Nº 01/2023
          </Typography>
          <Typography
            className="self-stretch text-black text-[1.5em] font-bold font-['Inter'] capitalize"
            sx={{ alignSelf: "stretch", fontWeight: "bold" }}
          >
            - CHAMADA
          </Typography>
          <Typography
            className="self-stretch text-black text-[1.5em] font-bold font-['Inter'] capitalize"
            sx={{ alignSelf: "stretch", fontWeight: "bold" }}
          >
            PÚBLICA N° 05/2023
          </Typography>
          <Typography
            className="self-stretch text-black text-[1.5em] font-bold font-['Inter'] capitalize"
            sx={{ alignSelf: "stretch", fontWeight: "bold" }}
          >
            - PROGRAMA
          </Typography>

          <Typography
            className="self-stretch text-black text-[1.5em] font-bold font-['Inter'] capitalize"
            sx={{ alignSelf: "stretch", fontWeight: "bold" }}
          >
            TECNOVA III
          </Typography>
        </Grid>
        <Box sx={{ display: "flex" }}>
          {categoria === "resultado" && resultado}
          {categoria === "edital" && edital}
        </Box>
      </CardContent>
      <CardActions>
        <PrimaryButton fullWidth>Fazer download</PrimaryButton>
      </CardActions>
    </React.Fragment>
  );
  return (
    <div>
      <Card variant="outlined" sx={{ padding: "0.8em 1.2em 0.8em 1.2em" }}>
        {card}
      </Card>
    </div>
  );
}
