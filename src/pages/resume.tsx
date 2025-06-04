import React from "react";
import styled from "styled-components";

import ResumeSection from "../components/resume/ResumeSection";
import { ExperienceItem } from "../components/resume/ExperienceItem";
import { EducationItem } from "../components/resume/EducationItem";
import { ProjectItem } from "../components/resume/ProjectItem";
import resumeData from "../data/resume-data";

export const Resume = () => (
    <StyledContainer>
        <div className="resume-header">
            <div className="resume-header__title">
                <div className="resume-header__fadeback" role="presentation">
                    mf
                </div>
                <h1 className="resume-header__name">matthew frey</h1>
            </div>

            <ul className="resume-header__contact">
                {resumeData.contactLinks.map(link => (
                    <li key={link.href}>
                        <a href={link.href} target="__blank">
                            {link.label}&nbsp;&nbsp;{link.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>

        <ResumeSection title="Experience">
            {resumeData.experience.map((x, i) => (
                <ExperienceItem key={i} {...x} />
            ))}
        </ResumeSection>

        <ResumeSection title="Education" pageBreak>
            {resumeData.education.map((x, i) => (
                <EducationItem key={i} {...x} />
            ))}
        </ResumeSection>

        <ResumeSection title="Notable Projects">
            {resumeData.projects.map((x, i) => (
                <ProjectItem key={i} {...x} />
            ))}
        </ResumeSection>
    </StyledContainer>
);

const StyledContainer = styled.div`
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textColor};
    padding: 1.5rem 2rem;

    @media print {
        padding: 6rem;
    }

    .resume-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 1rem;
        margin-bottom: 2rem;

        @media (max-width: 480px) {
            flex-direction: column;
        }

        &__fadeback {
            opacity: 0.2;
            font-size: 4rem;
            pointer-events: none;
            user-select: none;
            color: ${({ theme }) => theme.colors.primary};
        }

        &__name {
            margin-top: -3rem;
            font-size: 2rem;
        }

        &__contact {
            list-style: none;
            flex-shrink: 0;
            margin: 0;
            padding: 0;
            text-align: right;

            a {
                color: inherit;
                font-size: 0.9rem;
                vertical-align: top;

                svg {
                    margin-left: 0.25rem;
                }
            }
        }
    }
`;

export default Resume;
