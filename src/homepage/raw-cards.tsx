function Cards() {
  return (
    <div className="w-[736px] h-[772px] justify-between items-center inline-flex">
      <div className="flex-col justify-start items-center gap-8 inline-flex">
        <div className="justify-center items-center gap-8 inline-flex">
          <div className="w-[225px] p-[18px] bg-white rounded flex-col justify-start items-start gap-3 inline-flex">
            <div className="text-black text-base font-normal font-['Inter']">
              Data limite: 22/12/2024
            </div>
            <div className="self-stretch text-black text-2xl font-bold font-['Inter'] capitalize">
              ADENDO Nº 01/2023 - CHAMADA PÚBLICA N° 05/2023 - PROGRAMA TECNOVA
              III{" "}
            </div>
            <div className="px-1.5 py-[3px] bg-gray-300 rounded-[3px] justify-start items-start gap-1.5 inline-flex">
              <div className="text-center text-emerald-950 text-[7.50px] font-semibold font-['Inter']">
                RESULTADO
              </div>
            </div>
            <div className="self-stretch px-3 py-[7.50px] bg-cyan-700 rounded justify-center items-center gap-1.5 inline-flex">
              <div className="text-white text-xs font-semibold font-['Inter'] leading-[13.50px]">
                Fazer download
              </div>
            </div>
          </div>
          <div className="w-[300px] p-6 bg-white rounded-md flex-col justify-start items-start gap-4 inline-flex">
            <div className="text-black text-base font-normal font-['Inter']">
              Data limite: 22/12/2024
            </div>
            <div className="self-stretch text-black text-2xl font-bold font-['Inter'] capitalize">
              ADENDO Nº 01/2023 - CHAMADA PÚBLICA N° 05/2023 - PROGRAMA TECNOVA
              III{" "}
            </div>
            <div className="px-2 py-1 bg-gray-300 rounded justify-start items-start gap-2 inline-flex">
              <div className="text-center text-emerald-950 text-[10px] font-semibold font-['Inter']">
                RESULTADO
              </div>
            </div>
            <div className="self-stretch px-4 py-2.5 bg-cyan-700 rounded-md justify-center items-center gap-2 inline-flex">
              <div className="text-white text-base font-semibold font-['Inter'] leading-[18px]">
                Fazer download
              </div>
            </div>
          </div>
          <div className="w-[225px] p-[18px] bg-white rounded flex-col justify-start items-start gap-3 inline-flex">
            <div className="text-black text-base font-normal font-['Inter']">
              Data limite: 22/12/2024
            </div>
            <div className="self-stretch text-black text-2xl font-bold font-['Inter'] capitalize">
              ADENDO Nº 01/2023 - CHAMADA PÚBLICA N° 05/2023 - PROGRAMA TECNOVA
              III{" "}
            </div>
            <div className="px-1.5 py-[3px] bg-rose-200 rounded-[3px] justify-start items-start gap-1.5 inline-flex">
              <div className="text-center text-pink-950 text-[7.50px] font-semibold font-['Inter']">
                EDITAL
              </div>
            </div>
            <div className="self-stretch px-3 py-[7.50px] bg-cyan-700 rounded justify-center items-center gap-1.5 inline-flex">
              <div className="text-white text-xs font-semibold font-['Inter'] leading-[13.50px]">
                Fazer download
              </div>
            </div>
          </div>
        </div>
        <div className="w-32 h-12 justify-center items-start gap-8 inline-flex">
          <div className="w-12 h-12 relative flex-col justify-start items-start flex" />
          <div className="w-12 h-12 relative flex-col justify-start items-start flex" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
