import React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../designsystem/styles/GlobalStyles';
import getTheme from '../designsystem/theme';
import Frame from '../components/Frame';
import Nav from '../components/Nav';


class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <ThemeProvider theme={ getTheme('light') }>
                    <Frame>
                        <GlobalStyles />
                        <Nav />
                        <Component {...pageProps} />
                    </Frame>
                </ThemeProvider>
            </Container>
        )
    }
}

export default MyApp