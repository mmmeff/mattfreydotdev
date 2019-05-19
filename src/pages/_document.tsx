import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, ThemeProvider } from 'styled-components';

import getTheme from '../designsystem/theme';

export default class Doc extends Document<{ styleTags: any }> {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet()

        const page = renderPage((App) => {
            return (props) => {
                return sheet.collectStyles(<App {...props} />);
            }
        })

        const styleTags = sheet.getStyleElement()

        return { ...page, styleTags }
    }

    render() {
        return (
            <ThemeProvider theme={ getTheme('light') }>
                <html>
                    <Head>
                        {/* <link
                            rel="stylesheet"
                            href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap"
                        /> */}

                        { this.props.styleTags }
                    </Head>

                    <body>
                        <Main />

                        <NextScript />
                    </body>
                </html>
            </ThemeProvider>
        )
    }
}

