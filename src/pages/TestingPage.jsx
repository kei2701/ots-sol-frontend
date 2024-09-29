import {Stack, styled} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom/client";

import TestingSideBar from "../components/TestingSideBar" ;


function TestingPageThemeProvider(props) {
    const themeOptions = {
        typography: {
            fontFamily: `"Roboto", "Arial", sans-serif`,
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundColor: "#4D5257",
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

TestingPageThemeProvider.propTypes = {
    children: PropTypes.node,
};

function TestingPage() {
    return (
        <>
            <TestingPageThemeProvider>
            <TestingSideBar />
            </TestingPageThemeProvider>
        </>
    );
}

export default TestingPage;