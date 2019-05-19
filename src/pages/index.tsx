import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { GiMountaintop } from 'react-icons/gi';
import { FaGithub, FaLinkedin, FaGitlab, FaEnvelope } from 'react-icons/fa';

export default class Home extends React.PureComponent {
    private links: any = [
        [ 'LinkedIn', 'https://www.linkedin.com/in/matthewefrey', <FaLinkedin /> ],
        [ 'Gitlab', 'https://www.gitlab.com/matthewfrey', <FaGitlab /> ],
        [ 'Github', 'https://www.github.com/mmmeff', <FaGithub /> ],
        [ 'Email me', 'mailto:matthewfrey@protonmail.com', <FaEnvelope /> ]
    ]

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
                <div className="me"></div>
                <div className="glyph"></div>
                
                <div className="content">
                    <div className="the-fold">
                        <h1 className="content__name">
                            Matt Frey
                        </h1>
                        <h3 className="content__is-a">
                            is currently a <strong>
                                Front-End Engineer
                            </strong> at <strong className="imdb">
                                <a href="https://www.imdb.com">IMDb</a>
                            </strong> and lives in <strong>
                                Seattle,&nbsp;WA&nbsp;<GiMountaintop />
                            </strong>
                        </h3>
                        <div className="content__spacer" />
                    </div>

                    <div className="content__info">
                        {
                            this.links.map((link) => (
                                <a 
                                    key={ link[1] } 
                                    href={ link[1]} 
                                    target="_blank"
                                    aria-label={ link[0] }
                                    rel="noopener"
                                >
                                    { link[2] }
                                </a>
                            ))
                        }
                    </div>
                </div>
            </StyledContainer>
        );
    }
}

const StyledContainer = styled.div`
    .content {
        position: relative;
        max-width: 1024px;
        margin: 0 auto;
        padding: 0 2rem 2rem;
        z-index: 2;

        .the-fold {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            position: relative;
        }

        strong {
            color: white;
            text-shadow: 1px 2px red;
            font-style: italic;
            font-size: 1.1em;

            &.imdb {
                display: inline-block;
                background: #F5C518;
                padding: 0 0.33em;
                border-radius: 5px;
                font-family: 'Impact', sans-serif;
                font-style: initial;
                text-shadow: none;

                a { 
                    color: black;
                    &:hover:after { display: none }
                }
            }
        }

        &__name {
            font-size: 3em;
            text-align: center;
            width: 100%;
            margin: 0;
            position: absolute;
            top: 3rem;

            @media (min-width: 1024px) {
                font-size: 10rem;
                text-align: right;
                width: 40vw;
                top: 0;
                left: 0;
            }
        }

        &__is-a {
            font-size: 2rem;
            width: 100%;
            text-align: center;
            position: absolute;
            bottom: 15vh;

            @media (min-width: 768px) {
                font-size: 3rem;
                text-align: left;
                margin: 0 0 0 auto;
                width: 50vw;
                bottom: 10rem;
                right: 0;
            }
        }

        &__spacer {
            height: 5rem;
            width: 33%;
            color: ${ ({ theme }) => theme.colors.lineColor };
            opacity: 0.5;
            margin: 3rem auto;
            clip-path: polygon(0 0, 50% 33%, 100% 0, 100% 66%, 50% 100%, 0 66%);
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAEklEQVQImWNgYGD4z0AswK4SAFXuAf8EPy+xAAAAAElFTkSuQmCC);
            flex-shrink: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
        }

        &__info {
            border: ${ ({ theme }) => theme.lineSizes.thin } solid ${ ({ theme }) => theme.colors.lineColor };
            border: ${ ({ theme }) => theme.lineSizes.thin } solid ${ ({ theme }) => theme.colors.primary };
            border-radius: 3px;
            padding: ${ ({ theme }) => theme.lineSizes.thic };
            display: flex;
            align-items: center;
            justify-content: center;

            a {
                color: white;
                vertical-align: middle;
                margin: 1rem;
            }
        }
    }

    .glyph {
        clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);
        width: 40vw;
        height: 40vw;
        /* border-radius: 100%; */
        /* background: black; */
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
        background-image: url('/static/bgs/me.webp');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left top;
        width: 100vw;
        mix-blend-mode: lighten;
        position: absolute;
        top: 0;
        right: ${ ({ theme }) => theme.lineSizes.thiccc };
        bottom: 0;
        z-index: 1;
        pointer-events: none;
    }
`
