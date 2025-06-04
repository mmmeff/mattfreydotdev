import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import { FaLink } from "react-icons/fa";

interface Props {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    aside1?: React.ReactNode;
    aside2?: React.ReactNode;
    children?: React.ReactNode;
    fullWidth?: boolean;
    className?: any;
    badge?: React.ReactNode;
    link?: string;
}

const ResumeSubSection = (props: Props) => {
    const {
        className,
        fullWidth,
        title,
        subtitle,
        aside1,
        aside2,
        children,
        badge,
        link,
    } = props;

    return (
        <StyledContainer
            className={classnames(className, { fullWidth, hasBadge: !!badge })}
        >
            {badge && <div className="resume-sub__badge">{badge}</div>}

            <div className="resume-sub__heading">
                <div className="resume-sub__left">
                    <h3>
                        {title}
                        {link && (
                            <a
                                href={link}
                                target="__blank"
                                style={{
                                    color: "blueviolet",
                                    marginLeft: "0.5rem",
                                    fontSize: "0.85rem",
                                }}
                            >
                                <FaLink />
                            </a>
                        )}
                    </h3>
                    {subtitle && <h4>{subtitle}</h4>}
                </div>

                <div className="resume-sub__right">
                    {aside1 && <div className="aside aside--1">{aside1}</div>}
                    {aside2 && <div className="aside aside--2">{aside2}</div>}
                </div>
            </div>
            <div className="resume-sub__body">{children}</div>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    margin: 0.5rem 0;
    width: 100%;
    position: relative;

    @media (min-width: 600px) {
        &:not(.fullWidth) {
            width: 45%;
        }
    }

    h3,
    h4 {
        margin: 0;
    }

    h4 {
        color: ${({ theme }) => theme.colors.secondary};
    }

    .resume-sub__heading {
        align-items: center;
        border-bottom: ${({ theme }) =>
            theme.lineSizes.thinnn + " solid " + theme.colors.primary};
        display: flex;
        justify-content: space-between;

        .aside {
            text-align: right;
            margin-left: 1rem;
        }

        .aside--1 {
            opacity: 0.85;
        }

        .aside--2 {
            opacity: 0.7;
        }
    }

    .resume-sub__body {
        font-size: 0.8rem;
    }

    .resume-sub__badge {
        position: absolute;
        left: -3.75rem;
        top: -5%;
        font-size: 4rem;
        opacity: 0.3;
        color: ${({ theme }) => theme.colors.secondary};
    }

    &.hasBadge {
        /* padding-left: 0.5rem; */
        position: relative;
    }
`;

export default ResumeSubSection;
