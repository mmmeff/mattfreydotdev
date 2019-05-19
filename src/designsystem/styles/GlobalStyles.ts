import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *, *:before, *:after { box-sizing: border-box; }

    html {
        background-color: ${ ({ theme }) => theme.colors.background };
        font-size: 16px;
        color: ${ ({ theme }) => theme.colors.textColor };
        font-family: 'Roboto Slab', monospace, serif;
    }

    html, body {
        padding: 0;
        margin: 0;
    }

    a {
        color: ${ ({ theme }) => theme.colors.linkColor };
        text-decoration: none;
        transition: all 0.2s;
        border-bottom: 0px solid currentColor;
        position: relative;

        &:after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 0;
            background-color: currentColor;
            transition: all 0.3s;
            opacity: 0;
            /* width: 0%; */
        }

        &:hover,
        &:focus {
            &:after {
                height: 2px;
                /* width: 100%; */
                opacity: 1;
            }
        }
    }
`

export default GlobalStyles;
