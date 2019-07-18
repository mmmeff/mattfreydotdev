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
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        height: 100vh;
        margin: 0 auto;
        max-width: 1024px;
        overflow: hidden;
        position: relative;
        z-index: 2;

        @media (min-width: 420px)  {
            padding: 0 2rem 2rem;
        }

        strong {
            color: white;
            font-style: italic;
            font-size: 1.1em;
            text-shadow: 1px 2px red;

            &.imdb {
                background: #F5C518;
                border-radius: 5px;
                display: inline-block;
                font-family: 'Impact', sans-serif;
                font-style: initial;
                padding: 0 0.33em;
                text-shadow: none;

                a { 
                    color: black;
                    &:hover:after { display: none }
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

        &__info {
            align-items: center;
            border-radius: 3px;
            border: ${ ({ theme }) => theme.lineSizes.thin } solid ${ ({ theme }) => theme.colors.primary };
            padding: ${ ({ theme }) => theme.lineSizes.thic };
            place-self: center;
            margin: 0.5rem;
            font-size: 1.5rem;

            a {
                color: white;
                vertical-align: middle;
                margin: 1rem;
            }

            @media (min-width: 420px) {
                font-size: 2.5rem;
            }
        }
    }

    .glyph {
        clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);
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
