"use client";

import { useTranslateStore } from "@/stores/translate-store";
import { projectsTranslate } from "@/translate/projects";
// import { FaGithub } from "react-icons/fa";
// import { GrDeploy } from "react-icons/gr";
// import { projectsData } from "@/data/projects";

export const Projects = () => {
    const { language } = useTranslateStore((state) => state);

    return (
        <div className="w-full bg-white dark:bg-black py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                    {projectsTranslate[language]?.title}
                </h1>
                <div className="w-full">Carousel area</div>
            </div>
        </div>
    );
};
