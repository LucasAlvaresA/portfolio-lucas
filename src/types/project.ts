export type Projects = {
    id: number;
    project: string;
    image: string;
    github: string;
    demo: string;
    technologies: string[];
    description: {
        en: string;
        br: string;
    };
};
