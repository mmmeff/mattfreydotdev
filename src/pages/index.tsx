import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { GiMountaintop } from 'react-icons/gi';

export default class Home extends React.PureComponent {
    render() {
        return (
            <StyledContainer>
                <Head>
                    <title>Matthew Frey</title>
                    <meta
                        name="description"
                        content="The landing page of Matthew Frey - a Front-End Engineer living in Seattle, WA"
                    />
                </Head>
                <div className="me" />
                <div className="glyph" />

                <div className="content">
                    <h1 className="content__name">Matt Frey</h1>
                    <h3 className="content__is-a">
                        is currently a{' '}
                        <strong>Senior Front-End Engineer</strong> at{' '}
                        <strong className="imdb">
                            <a href="https://www.imdb.com">IMDb</a>
                        </strong>{' '}
                        and lives in{' '}
                        <strong>
                            Seattle,&nbsp;WA&nbsp;
                            <GiMountaintop />
                        </strong>
                    </h3>
                </div>
            </StyledContainer>
        );
    }
}

const StyledContainer = styled.div`
    .content {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        height: calc(100vh - 40px);
        margin: 0 auto;
        max-width: 1024px;
        overflow: hidden;
        position: relative;
        z-index: 2;

        @media (min-width: 420px) {
            padding: 0 2rem 2rem;
        }

        strong {
            color: white;
            font-style: italic;
            font-size: 1.1em;
            text-shadow: 1px 2px red;

            &.imdb {
                background: #f5c518;
                border-radius: 5px;
                display: inline-block;
                font-family: 'Impact', sans-serif;
                font-style: initial;
                padding: 0 0.33em;
                text-shadow: none;

                a {
                    color: black;
                    &:hover:after {
                        display: none;
                    }
                }
            }
        }

        &__name {
            font-size: 5rem;
            grid-row: span 2;
            margin: 0;
            place-self: end;
            text-align: center;
            width: 100%;
            line-height: 0.9em;

            @media (min-width: 1024px) {
                font-size: 10rem;
            }
        }

        &__is-a {
            font-size: 1.5rem;
            grid-row: span 2;
            place-self: center;
            text-align: center;
            width: 100%;
            padding: 0 1rem;

            @media (min-width: 1024px) {
                font-size: 3rem;
            }
        }
    }

    .glyph {
        clip-path: polygon(
            0% 0%,
            0% 100%,
            25% 100%,
            25% 25%,
            75% 25%,
            75% 75%,
            25% 75%,
            25% 100%,
            100% 100%,
            100% 0%
        );
        width: 40vw;
        height: 40vw;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAEklEQVQImWNgYGD4z0AswK4SAFXuAf8EPy+xAAAAAElFTkSuQmCC);
        margin: 5rem auto 0;
        mix-blend-mode: overlay;
        pointer-events: none;
        position: absolute;
        left: 0;
        right: 0;
        top: 10rem;
        margin: auto;
    }

    .me {
        background-image: url('/images/bgs/me.webp');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left top;
        width: 100vw;
        mix-blend-mode: lighten;
        position: absolute;
        top: 0;
        right: ${({ theme }) => theme.lineSizes.thin};
        bottom: 0;
        z-index: 1;
        pointer-events: none;

        @media (min-width: 420px) {
            right: ${({ theme }) => theme.lineSizes.thiccc};
        }
    }
`;
