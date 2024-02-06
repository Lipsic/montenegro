import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const SecondaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#336299"),
  backgroundColor: "#DEEDFF",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#DEEDFF",
  },
}));

export default SecondaryButton;
