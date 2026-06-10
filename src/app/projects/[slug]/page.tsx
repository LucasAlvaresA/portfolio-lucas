import { notFound } from "next/navigation";

import { projectsData } from "@/data/projects";
import { ProjectContent } from "./project-content";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;

    const project = projectsData.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectContent project={project} />;
}
