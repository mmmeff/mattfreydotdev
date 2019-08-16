import React from "react";
import ResumeSubSection from "./ResumeSubSection";

export interface EducationItem {
    name: React.ReactNode;
    study: React.ReactNode;
    startDate: string;
    endDate: string;
    description: React.ReactNode;
}

export const EducationItem = (props: EducationItem) => (
    <ResumeSubSection
        fullWidth
        title={props.name}
        subtitle={props.study}
        aside1={`(${props.startDate} - ${props.endDate})`}
    >
        <p>{props.description}</p>
    </ResumeSubSection>
);
