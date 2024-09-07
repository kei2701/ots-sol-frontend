import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import PropTypes from "prop-types";

function CustomThemeProvider(props) {
  const themeOptions = {
    typography: {
      fontFamily: `"Roboto", "Arial", sans-serif`,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#EDF1F3",
            margin: 0,
          },
        },
      },
    },
  };

  let theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default CustomThemeProvider;
