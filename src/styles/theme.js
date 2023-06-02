import { createTheme } from "@mui/material/styles";
import { componentStyles } from "./componentStyles";

export const theme = createTheme({
  typography: {
    fontFamily: "Mulish",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
  },
  components: componentStyles,
});
