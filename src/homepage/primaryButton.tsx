import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const PrimaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#336299"),
  backgroundColor: "#336299",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#364C66",
  },
}));

export default PrimaryButton;
