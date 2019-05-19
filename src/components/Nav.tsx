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
            [ 'About', '/about' ],
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
                        <a>🧙‍♂mattfrey.dev</a>
                    </Link>

                    <div className="nav__links">
                        {
                            links.map((link, i) => (
                                <React.Fragment key={ link[1] }>
                                    <Link href={ link[1] }><a>{ link[0] }</a></Link>
                                    { i < links.length - 1  && ' | ' }
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
            </ThemeProvider>
        )
    }
}

export default styled(Nav)`
    align-items: center;
    background: ${ ({ theme }) => theme.colors.background };
    border: ${ ({ theme }) => theme.lineSizes.thic } solid ${ ({ theme }) => theme.colors.lineColor };
    border-top-width: 0;
    color: ${ ({ theme }) => theme.colors.textColor };
    display: flex;
    font-size: 1.1rem;
    height: 3.5rem;
    justify-content: center;
    margin: 0 auto;
    max-width: 40vw;
    min-width: 260px;
    padding: 1rem;
    position: relative;
    top: -1px;
    width: 100%;

    a {
        color: ${ ({ theme }) => theme.colors.textColor };
    }

    a:hover {
        color: ${ ({ theme }) => theme.colors.primary}
    }

    .nav__links {
        margin-left: auto;
        margin-top: 3px;
    }
`