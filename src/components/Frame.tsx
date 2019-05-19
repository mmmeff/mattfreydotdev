import React from 'react';
import styled from 'styled-components';
import isNode from 'detect-node';
import classnames from 'classnames';

// import Footer from './Footer';

interface State {
    initialized: boolean;
    mx?: number;
    my?: number;
}

class Frame extends React.PureComponent<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            initialized: false,
            mx: isNode ? undefined : window.innerWidth / 2,
            my: isNode ? undefined : window.innerHeight / 2,
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        const { initialized } = this.state;

        return (
            <div
                className={ classnames((this.props as any).className, { initialized }) }
                onMouseEnter={ () => this.setState({ initialized: true })}
                onMouseLeave={ () => this.setState({ initialized: false })}
            >
                {/* <div className="frame__shadow" /> */}
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
    /* .frame__shadow {
        border: ${ ({ theme }) => theme.lineSizes.thic } solid rgba(0,0,0,0.1);
        bottom: ${ ({ theme }) => theme.lineSizes.thic };
        content: '';
        display: block;
        filter: blur(3px);
        left: ${ ({ theme }) => theme.lineSizes.thic };
        opacity: 0;
        position: absolute;
        right: ${ ({ theme }) => theme.lineSizes.thic };
        top: ${ ({ theme }) => theme.lineSizes.thic }; 
    } */

    .frame__content {
        border: ${ ({ theme }) => theme.lineSizes.thicc } solid ${ ({ theme }) => theme.colors.lineColor };
        bottom: 0;
        left: 0;
        overflow: auto;
        margin: ${ ({ theme }) => theme.lineSizes.thin };
        overscroll-behavior: auto;
        right: 0;
        top: 0;
        min-height: calc(100vh - (${ ({ theme }) => theme.lineSizes.thicc }));
    }

    .frame__content--inner {
        margin: 0 auto;
        min-width: 260px;
        max-width: 40vw;
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
