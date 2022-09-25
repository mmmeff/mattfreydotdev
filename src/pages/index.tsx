import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { GiMountaintop, GiMushrooms, GiGuitar } from 'react-icons/gi';
import { DiRust } from 'react-icons/di';
import { FaTruckMonster } from 'react-icons/fa';

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
                    <div className="content-item content-item--lead">
                        <h1 className="content__name">Matt Frey</h1>
                        <h3 className="content__is-a">
                            is currently a{' '}
                            <strong>Lead Software Engineer</strong> at{' '}
                            <strong className="stoke">
                                <a href="http://stokespace.com/">STOKE Space Technologies</a>
                            </strong>{' '}
                            and lives in{' '}
                            <strong>
                                Seattle,&nbsp;WA&nbsp;
                                <GiMountaintop />
                            </strong>
                        </h3>
                    </div>

                    <div className="content-item content-item--list">
                        <p>
                            At the moment, he's learning:
                            <ul>
                                <li>
                                    <DiRust size={30} />
                                    Rust
                                </li>
                                <li>
                                    <GiMushrooms size={30} />
                                    Mushroom Foraging &amp; Cultivation
                                </li>
                                <li>
                                    <GiGuitar size={30} />
                                    Guitar Shredding
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </StyledContainer>
        );
    }
}

const StyledContainer = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
        margin: 0 auto;
        overflow: hidden;
        padding: 2rem 0 0;
        max-width: 1024px;
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

        @media (min-width: 420px) {
            padding: 0 2rem;
        }

        strong {
            color: white;
            font-style: italic;
            font-size: 1.1em;
            text-shadow: 1px 2px red;

            &.stoke {
                display: inline-block;

                a {
                    color: #E0472D;
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
                margin-top: 4rem;
            }
        }

        &__is-a {
            font-size: 1.5rem;
            grid-row: span 2;
            place-self: center;
            text-align: center;
            width: 95%;
            padding: 0 1rem;

            @media (min-width: 1024px) {
                font-size: 3rem;
            }
        }

        .content-item {
            /* border: 3px solid red; */
            padding: 1rem;
            font-weight: bold;

            &--list {
                background: rgba(255, 255, 255, 0.1);
                padding-left: 2rem;
                padding-right: 2rem;
                max-width: 420px;
                border-radius: 0.5rem;

                @media (min-width: 768px) {
                    margin-left: auto;
                }

                ul {
                    list-style: none;
                    li {
                        margin-left: 1rem;
                    }
                    li > svg {
                        vertical-align: bottom;
                        position: relative;
                        left: -1rem;
                    }
                }
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
        right: 0;
        bottom: 0;
        z-index: 1;
        pointer-events: none;
    }
`;
