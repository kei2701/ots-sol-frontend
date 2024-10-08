import {List, ListItem, Stack, styled} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme, CardContent } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom/client";
import TestingLayout from "../components/TestingLayout";

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
            <TestingLayout/>
            </TestingPageThemeProvider>
        </>
    );
}

export default TestingPage;