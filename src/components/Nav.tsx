import * as React from 'react';
import Link from 'next/link';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from '../designsystem/theme';

interface Props {
    className?: string;
}

class Nav extends React.PureComponent<Props> {
    render() {
        const { className } = this.props;

        const links = [
            // [ 'About', '/about' ],
            [ 'Blog', '/blog' ]
        ];

        // const socials = [
        //     [ 'github', 'https://www.github.com/mmmeff' ],
        //     [ 'linkedin', 'https://www.linkedin.com/matthewEfrey' ]
        // ];

        return (
            <ThemeProvider theme={ getTheme('dark') }>
                <div className={ className }>
                    <Link href='/'>
                        <a>mattfrey.dev</a>
                    </Link>

                    {
                        links.map((link, i) => (
                            <React.Fragment key={ link[1] }>
                                <Link href={ link[1] }>
                                    <a className="nav__link">
                                        •&nbsp;{ link[0] }
                                    </a>
                                </Link>
                                { i < links.length - 1  && ' | ' }
                            </React.Fragment>
                        ))
                    }
                </div>
            </ThemeProvider>
        )
    }
}

export default styled(Nav)`
    align-items: center;
    background-color: ${ ({ theme }) => theme.colors.background };
    background-image: url('/static/bgs/shed mini.webp');
    background-size: cover;
    background-position: bottom center;
    border-bottom: ${ ({ theme }) => theme.lineSizes.thin } solid ${ ({ theme }) => theme.colors.lineColor };
    color: ${ ({ theme }) => theme.colors.textColor };
    display: flex;
    font-size: 1.1rem;
    justify-content: space-between;
    margin: 0 auto 2rem;
    /* max-width: 40vw; */
    min-width: 260px;
    padding: 0.5rem 1rem;
    position: relative;
    top: -1px;
    width: 100%;

    a {
        color: ${ ({ theme }) => theme.colors.textColor };
    }

    .nav__link {
        font-size: 0.8em;
    }
`