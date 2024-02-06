import Controls from "./Controls";
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
    <div className="max-w-[1200px] w-full h-auto min-h-screen justify-between items-center flex px-8 gap-6">
      {fakeData.map((d) => (
        <div key={d.key} className={d.selected ? "basis-1/2" : "basis-1/3"}>
          <OutlinedCard
            data={d.data}
            titulo={d.titulo}
            categoria={d.categoria}
            selected={d.selected}
          />
          {d.selected && <Controls />}
        </div>
      ))}
    </div>
  );
}

export default Cards;
