import React from 'react';
import styled from 'styled-components';

export default class Home extends React.PureComponent {
    render() {
        return (
            <StyledContainer>
                <div className="me"></div>
                <div className="circle"></div>
            </StyledContainer>
        );
    }
}

const StyledContainer = styled.div`
    .circle {
        width: 50vh;
        height: 50vh;
        border-radius: 100%;
        background: black;
        margin: 5rem auto 0;
        mix-blend-mode: soft-light;
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
        pointer-events: none;
    }
`
