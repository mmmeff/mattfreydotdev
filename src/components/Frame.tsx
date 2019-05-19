import React from 'react';
import styled from 'styled-components';
// import isNode from 'detect-node';
import classnames from 'classnames';

// import Footer from './Footer';

interface State {
}

class Frame extends React.PureComponent<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            bgImage: '/static/bgs/shed_thumb.webp',
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div
                className={ classnames((this.props as any).className) }
            >
                <div className="frame__content">
                    <div className="frame__content--inner">
                        { this.props.children }
                    </div>
                </div>

                {/* <Footer /> */}
            </div>
        )
    }
}

export default styled(Frame)`
    /* background-image: url('/static/bgs/shed.webp'); */
    background-color: ${ ({ theme }) => theme.colors.primary };
    background-size: cover;
    background-position: top center;
    font-size: 2rem;

    .frame__content {
        border: ${ ({ theme }) => theme.lineSizes.thiccc } solid ${ ({ theme }) => theme.colors.lineColor };
        border-top-width: 0;
        border-bottom-width: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        overscroll-behavior: auto;
        right: 0;
        top: 0;
        min-height: 100vh;
    }

    .frame__content--inner {
        margin: 0 auto;
        min-width: 260px;
        /* max-width: 1028px; */
        width: 100%
    }

    &.initialized {
        .frame__content {
        }

        .frame__shadow {
            /* opacity: 1; */
        }
    }
`;
