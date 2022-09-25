import { ExperienceItem } from '../components/resume/ExperienceItem';
import { FaEnvelope, FaGlobeAmericas, FaPhone } from 'react-icons/fa';
import { ProjectItem } from '../components/resume/ProjectItem';
import { EducationItem } from '../components/resume/EducationItem';

export const contactLinks = [
    {
        href: 'https://www.mattfrey.dev',
        label: 'mattfrey.dev',
        icon: <FaGlobeAmericas />,
    },
    {
        href: 'mailto:matthewfrey@protonmail.com',
        label: 'matthewfrey@protonmail.com',
        icon: <FaEnvelope />,
    },
];

export const experience: ExperienceItem[] = [
    {
        primary: true,
        name: 'STOKE Space Technologies',
        position: 'Lead Software Engineer',
        location: 'Kent, WA 🏔',
        startDate: '06/2022',
        endDate: 'present',
        responsibilities: [
            'Leading the design and implementation of Fusion by STOKE, a SaaS product that solves inventory tracking and work management in the hardware space. Think JIRA for the hardware space',
            'Full-stack development of the entire platform, including a Prisma-powered GraphQL API and a Next.js front-end',
            'Coaching and mentoring junior engineers on the team as we tackle an ambiguous problem space',
            'Designing, building, and maintaining infrastructure on AWS Fargate, CI/CD, end-to-end testing, and operational observability',
            'Occasionally installing a network switch or two at our engine test facilities in the desert'
        ]
    },
    {
        promotion: true,
        name: 'IMDb/Amazon',
        position: '[Promoted] Senior Front-End Engineer III',
        location: 'Seattle, WA 🏔',
        startDate: '10/2020',
        endDate: '06/2022',
        responsibilities: [
            'On the ConsumerWeb team tasked with owning and operating the IMDb.com front-ends',
            "Team Lead driving IMDb's migration to a Typescript+Next.js/React+GraphQL tech stack",
            "Architecting and executing IMDb's AWS migration, responsive redesign, and localization/regionalization efforts",
            'Supporting and maintaining legacy properties while working on our next-generation platform',
        ],
    },
    {
        name: 'IMDb/Amazon',
        position: 'Front-End Engineer II',
        location: 'Seattle, WA 🏔',
        startDate: '07/2018',
        endDate: '09/2020',
        responsibilities: [
            'On the Web-UI team tasked with increasing organizational front-end development velocity',
            'Built pattern libraries, documentation sites, and CLI build tools to help IMDb.com begin modernizing their site',
            'Supported multiple other teams and initiatives across the organization by building libraries/tools to improve both developer and user-experience',
            'Shared on-call duty as first line of defense against outages and bad actors',
        ],
    },
    {
        name: 'MD Insider',
        position: 'Staff Software Engineer',
        location: 'Santa Monica, CA 🏄‍♂️',
        startDate: '05/2016',
        endDate: '06/2018',
        responsibilities: [
            'Lead a full scale overhaul of the companyʼs primary product, moving to an isomorphic/universal Node/React/Redux stack',
            'Migrated from AWS EC2 Instances to Google Kubernetes Engine, saving costs and improving time to market by reducing operational overhead.',
            'Built a suite of B2B SaaS products that turned around a near-fold startup and led to acquisition in 2019',
        ],
    },
    {
        name: 'ScoreBig',
        position: 'Staff Software Engineer',
        location: 'Los Angeles, CA 🌴',
        startDate: '01/2015',
        endDate: '05/2016',
        responsibilities: [
            'Full-stack developer and front-end lead on a large, multi-national team',
            'Team lead for Team Conversion, tasked with improving click-through rates and revenue across the platform',
            'Designed and built a multi-team system and pipeline, providing users with interactive stadium seatmap UIs',
        ],
    },
    {
        name: 'REVOLT TV',
        position: 'Digital Engineer',
        location: 'Hollywood, CA 🎬',
        startDate: '11/2013',
        endDate: '01/2015',
        responsibilities: [
            'Front-end developer and graphic designer',
            'Operated on a small MEAN-stack team',
            'Maintained both music news site and in-house CMS',
        ],
    },
    {
        name: 'Parse3',
        position: 'User Interface Developer',
        location: 'Warwick, NY 👨‍🌾',
        startDate: '09/2012',
        endDate: '11/2013',
        responsibilities: [
            'Started as a co-op full-stack developer',
            'Maintained legacy systems and was fully autonomous on several projects',
            'Headed onboarding of incoming co-ops',
        ],
    },
];

export const education: EducationItem[] = [
    {
        name: 'Rochester Institute of Technology',
        study: 'Software Engineering',
        startDate: '2010',
        endDate: '2013',
        description: `
            Studied Software Engineering until taking a co-op at Parse3 and was
            offered a full-time position before returning to school. Classwork was
            heavily focused on application architecture and emerging technologies,
            commonly in the form of agile development project teams.
        `,
    },
];

export const projects: ProjectItem[] = [
    {
        name: 'IMDbNext',
        employer: 'IMDb.com',
        year: '2019+',
        description: `
            IMDbNext is an architectural upgrade project that aims to align the 
            direction of the front-end team’s development, deployment, and 
            hosting processes. IMDbNext utilizes modern front-end tooling like 
            React, Next.js, and GraphQL to modernize key aspects of our user 
            experience while shifting IMDb's infrastructure to containerized 
            solutions on AWS. I led the design and implementation of this 
            architecture and in the first year alone grew it to serve over 80% 
            of IMDb's traffic.
        `,
    },
    {
        name: 'PLAID (Pattern Library)',
        employer: 'IMDb.com',
        year: '2018+',
        description: `
            The "Pattern Library for Atomic Interface Design," or PLAID for short, is
            a design system that aims for adoption across all of IMDb's front-ends. It
            is fully themeable using CSS vars, supports both React and Java integrations,
            and is fully accessible and progressively enhanced.
        `,
    },
    {
        name: 'Microfrontend Architecture',
        year: '2018+',
        employer: 'IMDb.com',
        description: `
            The URRF build tool allows developers to iterate on front-end code using
            all of the latest modern tooling while allowing for completely distributed,
            "micro-frontend" architectures via deterministic asset generation and AWS lambda
            server-side-renderer generation.
        `,
    },
    {
        name: 'MD Insider Scout',
        employer: 'MD Insider',
        year: '2018',
        description: `
            Served as the primary front-end developer on creating a new isomorphic React
            and Redux single-page application built with typescript. Scout is a search-engine
            that allows both patients and professionals to search, filter, and narrow down
            both doctors and institutions based on an ever-growing set of criteria.
        `,
    },
    {
        name: 'Kubernetes/Google Cloud Migration',
        employer: 'MD Insider',
        year: '2017',
        description: `
            Migrated many front-end and back-end services from AWS EC2 instances
            to the Kubernetes container orchestration system on Google Cloud Platform,
            allowing for cheaper and more dynamic scaling and an easier-to-maintain architecture.
        `,
    },
    {
        name: 'Interactive Seatmaps',
        employer: 'ScoreBig',
        year: '2016',
        description: `
            Improved consumers' ticket-buying experience by creating both staff tooling and
            client-side apps that leverage SVG seatmaps, allowing users to view
            and choose their tickets down to the very seat.
        `,
    },
    {
        name: 'Go-Live Video Chat Client',
        employer: 'REVOLT TV',
        year: '2015',
        description: `
            Worked closely with our studios to create a fully-integrated video
            chat client for both viewers and VIPs to dial in a video call to any
            live program, straight from the website to the studio.
        `,
    },
    {
        name: 'Lucene.NET Solr Faceting Algorithm',
        employer: 'Parse3',
        year: '2014',
        client: 'Crayola',
        description: `
            Created a faceting algorithm to alleviate high server-load and user
            bounce rates on Crayolaʼs faceted product navigation, utilizing
            bitwise operations on search index hits to reduce average peak
            server load by over 66%.
        `,
    },
    {
        name: 'Crayola ColorCycle Program',
        employer: 'Parse3',
        year: '2013',
        client: 'Crayola',
        description: `
            A front-end product still live today on Crayola.com, ColorCycle is a web
            dashboard allowing educators to generate FedEx shipping labels to return
            used/empty Crayola markers for recycling. Involved integration with the
            FedEx SOAP APIs from an ASP.NET/Sitecore codebase.
        `,
    },
];

export default {
    contactLinks,
    experience,
    education,
    projects,
};
