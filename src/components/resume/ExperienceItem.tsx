import React from "react";
import ResumeSubSection from "./ResumeSubSection";

export interface ExperienceItem {
    primary?: boolean;
    name: React.ReactNode;
    position: React.ReactNode;
    location: React.ReactNode;
    startDate: string;
    endDate: string;
    responsibilities: string[];
}

export const ExperienceItem = (props: ExperienceItem) => (
    <ResumeSubSection
        fullWidth={props.primary}
        title={props.name}
        subtitle={props.position}
        aside1={`${props.startDate} - ${props.endDate}`}
        aside2={props.location}
    >
        <ul>
            {props.responsibilities.map(x => (
                <li key={x}>{x}</li>
            ))}
        </ul>
    </ResumeSubSection>
);
