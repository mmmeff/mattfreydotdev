import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

interface State {}

class Frame extends React.PureComponent<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            bgImage: '/images/bgs/shed_thumb.webp',
        };
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className={classnames((this.props as any).className)}>
                <div className="frame__content">
                    <div className="frame__content--inner">
                        {this.props.children}
                    </div>
                </div>

                {/* <Footer /> */}
            </div>
        );
    }
}

export default styled(Frame)`
    background-image: linear-gradient(
        to bottom right,
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.secondary}
    );
    background-size: cover;
    background-position: top center;

    .frame__content {
        border-left: ${({ theme }) => theme.lineSizes.thiccc} solid
            ${({ theme }) => theme.colors.primary};
        border-top-width: 0;
        border-bottom-width: 0;
        bottom: 0;
        left: 0;
        overscroll-behavior: auto;
        right: 0;
        top: 0;
        min-height: 100vh;

        @media (max-width: 480px) {
            border-left-width: ${({ theme }) => theme.lineSizes.thin};
            border-right-width: ${({ theme }) => theme.lineSizes.thin};
        }

        @media print {
            border: none;
        }
    }

    .frame__content--inner {
        margin: 0 auto;
        min-width: 260px;
        width: 100%;
        display: flex;
        flex-direction: column;

        @media screen {
            padding-top: 40px;
        }
    }

    &.initialized {
        .frame__content {
        }

        .frame__shadow {
            /* opacity: 1; */
        }
    }
`;
