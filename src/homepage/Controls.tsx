import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";

function Controls() {
  const styles = { color: "#f2f2f2" };
  return (
    <div className="flex justify-center translate-y-4">
      <IconButton aria-label="adiante">
        <ArrowBackIcon sx={styles} />
      </IconButton>
      <IconButton aria-label="voltar">
        <ArrowForwardIcon sx={styles} />
      </IconButton>
    </div>
  );
}

export default Controls;
