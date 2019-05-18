import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

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
            <html>
                <Head>
                    { this.props.styleTags }
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
