import React from 'react';
import ResumeSubSection from './ResumeSubSection';
import { CgChevronDoubleUp } from 'react-icons/cg';

export interface ExperienceItem {
    primary?: boolean;
    name: React.ReactNode;
    position: React.ReactNode;
    location: React.ReactNode;
    startDate: string;
    endDate: string;
    responsibilities: string[];
    promotion?: boolean;
}

export const ExperienceItem = ({
    primary,
    name,
    position,
    location,
    startDate,
    endDate,
    responsibilities,
    promotion,
}: ExperienceItem) => (
    <ResumeSubSection
        fullWidth={primary}
        title={name}
        subtitle={position}
        aside1={`${startDate} - ${endDate}`}
        aside2={location}
        badge={promotion && <CgChevronDoubleUp />}
    >
        <ul>
            {responsibilities?.map((x: string) => (
                <li key={x}>{x}</li>
            ))}
        </ul>
    </ResumeSubSection>
);
