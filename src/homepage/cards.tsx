import { Grid } from "@mui/material";
import OutlinedCard from "./card";

const fakeData = [
  {
    key: "ed-1",
    data: "22/12/2024",
    titulo:
      "ADENDO Nº 01/2023 - CHAMADA PÚBLICA N° 05/2023 - PROGRAMA TECNOVA III",
    categoria: "resultado",
  },
  {
    key: "ed-2",

    data: "22/12/2024",
    titulo:
      "ADENDO Nº 01/2023 - CHAMADA PÚBLICA N° 05/2023 - PROGRAMA TECNOVA III",
    categoria: "resultado",
    selected: true,
  },
  {
    key: "ed-3",
    data: "22/12/2024",
    titulo:
      "ADENDO Nº 01/2023 - CHAMADA PÚBLICA N° 05/2023 - PROGRAMA TECNOVA III",
    categoria: "edital",
  },
];

function Cards() {
  return (
    <Grid
      container
      className="max-w-[1000px] min-h-screen justify-between items-center inline-flex px-8"
    >
      {fakeData.map((d) => (
        <Grid item key={d.key} xs={4}>
          <div className={`${!d.selected ? "max-w-[80%]" : "p-0"} relative`}>
            <OutlinedCard
              data={d.data}
              titulo={d.titulo}
              categoria={d.categoria}
              selected={d.selected}
            />
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default Cards;
