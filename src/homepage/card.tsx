import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PrimaryButton from "./primaryButton";

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
  const fontSize = selected ? "170%" : "120%";

  const card = (
    <React.Fragment>
      <CardContent
        sx={{
          height: selected ? "21rem" : "15rem",
          marginBottom: 2,
        }}
      >
        <Typography color="text.secondary" gutterBottom>
          <span
            className={selected ? "text-[120%]" : ""}
          >{`Date limite: ${data}`}</span>
        </Typography>
        <div className="h-[80%] flex flex-col justify-center">
          <Typography
            className="self-stretch text-black text-[1.5em] font-bold font-['Inter'] capitalize"
            sx={{
              alignSelf: "stretch",
              fontWeight: "bold",
              fontSize,
            }}
          >
            ADENDO Nº 01/2023
          </Typography>
          <Typography
            className="self-stretch text-black text-[1.5em] font-bold font-['Inter'] capitalize"
            sx={{ alignSelf: "stretch", fontWeight: "bold", fontSize }}
          >
            - CHAMADA
          </Typography>
          <Typography
            className="self-stretch text-black text-[1.5em] font-bold font-['Inter'] capitalize"
            sx={{ alignSelf: "stretch", fontWeight: "bold", fontSize }}
          >
            PÚBLICA N° 05/2023
          </Typography>
          <Typography
            className="self-stretch text-black text-[1.5em] font-bold font-['Inter'] capitalize"
            sx={{ alignSelf: "stretch", fontWeight: "bold", fontSize }}
          >
            - PROGRAMA
          </Typography>

          <Typography
            className="self-stretch text-black text-[1.5em] font-bold font-['Inter'] capitalize"
            sx={{ alignSelf: "stretch", fontWeight: "bold", fontSize }}
          >
            TECNOVA III
          </Typography>
        </div>
        <Box sx={{ display: "flex" }}>
          <span
            className={`className="self-stretch text-black font-bold font-['Inter'] capitalize" ${
              selected ? "text-[120%]" : ""
            }`}
          >
            {categoria === "resultado" && resultado}
            {categoria === "edital" && edital}
          </span>
        </Box>
      </CardContent>
      <CardActions>
        <PrimaryButton fullWidth>
          <span className={selected ? "text-[120%]" : ""}>Fazer download</span>
        </PrimaryButton>
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
