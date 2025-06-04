import React from "react";
import ResumeSubSection from "./ResumeSubSection";

export interface ProjectItem {
    name: React.ReactNode;
    employer: React.ReactNode;
    description: React.ReactNode;
    year: string;
    client?: React.ReactNode;
    link?: string;
}

export const ProjectItem = (props: ProjectItem) => (
    <ResumeSubSection
        title={props.name}
        subtitle={props.employer + (!!props.client ? ` - ${props.client}` : "")}
        aside1={props.year}
        link={props.link}
    >
        <p>{props.description}</p>
    </ResumeSubSection>
);
