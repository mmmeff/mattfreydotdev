import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";

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
            <ThemeProvider theme={getTheme("light")}>
                {children}
            </ThemeProvider>
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
