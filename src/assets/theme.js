import { createMuiTheme } from "@material-ui/core/styles";

const customPrimaryBlue = "#4086ff";
const customSecodaryTextColor = "#9b9b9b";
const whiteColor = "#fff";
const disabledBgColor = "#e6e6e6";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: customPrimaryBlue
    },
    secondary: {
      main: customSecodaryTextColor
    },
    text: {
      primary: whiteColor,
      disabled: disabledBgColor
    }
  },
  typography: {
    primary: {
      main: ["OpenSans"]
    },
    secondary: {
      main: ["Raleway"]
    },
    tertiary: {
      main: ["Roboto"]
    }
  }
});

export default theme;
