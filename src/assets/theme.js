import { createMuiTheme } from "@material-ui/core/styles";
import { indigo, blue } from "material-ui/colors";

const customPrimaryBlue = "#4086ff";
const customSecodaryTextColor = "#9b9b9b";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: customPrimaryBlue
    },
    secondary: {
      main: customSecodaryTextColor
    }
  },
  typography: {
    primary: {
      main: ["Raleway"]
    },
    secondary: {
      main: ["Roboto"]
    }
  }
});

export default theme;
