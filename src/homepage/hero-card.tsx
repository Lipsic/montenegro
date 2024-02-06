import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import montenegroImg from "../assets/montenegro.jpg";

export default function HeroCard() {
  return (
    <Card sx={{ display: "flex", flexGrow: "1 1" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={montenegroImg}
        alt="Casimiro Montenegro"
      />
      <CardContent className="w-full my-auto">
        <div className="w-full flex flex-col gap-2 justify-between">
          <div className="text-center text-neutral-800 text-sm font-bold font-['Inter']">
            Casimiro Montenegro Filho
          </div>
          <div className="text-center text-neutral-800 text-[11px] font-normal font-['Inter']">
            29/10/1904 - 26/02/2000
          </div>
          <div className="text-center text-stone-400 text-[10px] font-normal font-['Inter'] capitalize">
            Criador do ITA e CTA
          </div>
          <div className="text-center text-stone-400 text-[10px] font-normal font-['Inter'] capitalize">
            Pioneiro do Correio Aéreo Militar (CAM)
          </div>
          <div className="text-center text-stone-400 text-[10px] font-normal font-['Inter'] capitalize">
            Patrono de Engenharia da FAB e ANE.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
