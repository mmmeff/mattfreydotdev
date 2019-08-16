import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
// import { IconContext } from 'react-icons';

import GlobalStyles from "../designsystem/styles/GlobalStyles";
import getTheme from "../designsystem/theme";
import Frame from "../components/Frame";
import Nav from "../components/Nav";

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        const Wrappers = ({ children }) => (
            /* <IconContext.Provider value={{ color: getTheme('light').colors.textColor }}> */
            <ThemeProvider theme={getTheme("light")}>
                <Container>{children}</Container>
            </ThemeProvider>
            /* </IconContext.Provider> */
        );

        return (
            <Wrappers>
                <Frame>
                    <GlobalStyles />
                    <Nav />
                    <Component {...pageProps} />
                </Frame>
            </Wrappers>
        );
    }
}

export default MyApp;
