import React from 'react';
import styled from 'styled-components';

export default class Home extends React.PureComponent {
    render() {
        return (
            <StyledContainer>
                <div className="me"></div>
                <div className="circle"></div>
                <div className="content">
                    <h1 className="content__name">
                        Matt Frey
                    </h1>
                    <h3 className="content__is-a">
                        is currently a <strong>
                            Front-End Engineer
                        </strong> at <strong className="imdb">
                            IMDb
                        </strong> and he lives in <strong>
                            Seattle, WA 🏔
                        </strong>
                    </h3>
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
        padding: 0 2rem;
        z-index: 2;

        strong {
            color: ${ ({ theme }) => theme.colors.secondary };

            &.imdb {
                display: inline-block;
                background: #F5C518;
                padding: 0 0.4rem;
                border-radius: 5px;
                color: black;
                opacity: 0.9;
            }
        }

        &__name {
            font-size: 15vw;
            width: 40vw;
            text-align: right;
            mix-blend-mode: overlay;
        }

        &__is-a {
            width: 40vw;
            margin-left: auto;
        }
    }

    .circle {
        width: 40vw;
        height: 40vw;
        border-radius: 100%;
        background: black;
        margin: 5rem auto 0;
        mix-blend-mode: soft-light;
        pointer-events: none;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
    }

    .me {
        background-image: url('/static/bgs/me.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left top;
        width: 100vw;
        mix-blend-mode: lighten;
        position: absolute;
        /* top: ${ ({ theme }) => theme.lineSizes.thiccc }; */
        top: 0;
        right: ${ ({ theme }) => theme.lineSizes.thiccc };
        bottom: 0;
        z-index: 1;
        pointer-events: none;
    }

    
`
