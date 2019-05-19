import React from 'react';
import styled from 'styled-components';

export default class Home extends React.PureComponent {
    render() {
        return (
            <StyledContainer>
                stay tuned...
            </StyledContainer>
        );
    }
}

const StyledContainer = styled.div`
    text-align: center;
    font-size: 3rem;
`
