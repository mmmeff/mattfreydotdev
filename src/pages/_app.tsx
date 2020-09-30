import React from 'react';
import App from 'next/app';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../designsystem/styles/GlobalStyles';
import getTheme from '../designsystem/theme';
import Frame from '../components/Frame';
import Nav from '../components/Nav';
import Head from 'next/head';

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

        return (
            <>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto+Slab"
                    />
                </Head>
                <ThemeProvider theme={getTheme('light')}>
                    <GlobalStyles />
                    {/* <PageContainer> */}
                    <Frame>
                        <Nav />
                        <Component {...pageProps} />
                    </Frame>
                    {/* </PageContainer> */}
                </ThemeProvider>
            </>
        );
    }
}

// const PageContainer = styled.main`
//     padding: 4rem 0;
//     max-width: 1200px;
//     margin: 0 auto;
// `;

export default MyApp;
