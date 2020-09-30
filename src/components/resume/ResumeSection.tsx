import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

interface Props {
    title: string;
    className?: any;
    pageBreak?: boolean;
    children?: React.ReactNode;
}

const ResumeSection = (props: Props) => {
    const { title, children, className, pageBreak } = props;

    return (
        <StyledContainer className={classnames(className, { pageBreak })}>
            <h2>{title}</h2>
            <StyledChildrenWrapper>{children}</StyledChildrenWrapper>
        </StyledContainer>
    );
};

const StyledContainer = styled.section`
    h2 {
        font-size: 2.5rem;
        margin: 0.75rem 0 0.5rem 0rem;
        opacity: 0.8;
        color: ${({ theme }) => theme.colors.primary};
    }

    &.pageBreak {
        page-break-before: always;
        @media print {
            margin-top: 6rem;
        }
    }
`;

const StyledChildrenWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
`;

export default ResumeSection;
