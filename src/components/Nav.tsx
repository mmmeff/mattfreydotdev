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
            ['Resume', '/resume'],
            // ['Blog', '/blog']
        ];

        return (
            <ThemeProvider theme={getTheme('dark')}>
                <div className={className}>
                    <Link href='/'>
                        <a>mattfrey.dev</a>
                    </Link>

                    <div className='nav__items'>
                        {links.map((link, i) => (
                            <React.Fragment key={link[1]}>
                                <Link href={link[1]}>
                                    <a className='nav__link'>{link[0]}</a>
                                </Link>
                                {i < links.length - 1 && ' | '}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}

export default styled(Nav)`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url('/static/bgs/shed mini.webp');
    background-size: cover;
    background-position: 100% 420px;
    background-attachment: fixed;
    color: ${({ theme }) => theme.colors.textColor};
    display: flex;
    font-size: 1.1rem;
    justify-content: space-between;
    margin: 0 auto;
    min-width: 260px;
    padding: 0.5rem 2rem;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;

    @media print {
        display: none;
    }

    a {
        color: ${({ theme }) => theme.colors.textColor};
    }

    .nav__link {
        font-size: 0.8em;
    }

    .nav__items {
        margin-left: auto;
    }
`;
