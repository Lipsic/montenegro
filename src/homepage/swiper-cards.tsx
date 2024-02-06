import { Grid } from "@mui/material";
import OutlinedCard from "./card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

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
  {
    key: "ed-4",
    data: "22/12/2024",
    titulo:
      "ADENDO Nº 01/2023 - CHAMADA PÚBLICA N° 05/2023 - PROGRAMA TECNOVA III",
    categoria: "edital",
  },
  {
    key: "ed-5",
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
      className="max-w-[1000px] min-h-screen justify-between items-center inline-flex px-8 relative"
    >
      <Swiper
        navigation={true}
        slidesPerView={3}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper"
      >
        {fakeData.map((d) => (
          <SwiperSlide key={d.key}>
            <OutlinedCard
              data={d.data}
              titulo={d.titulo}
              categoria={d.categoria}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
}

export default Cards;
