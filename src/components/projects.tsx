"use client";

import { useTranslateStore } from "@/stores/translate-store";
import { projectsTranslate } from "@/translate/projects";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Projects = () => {
    const { language } = useTranslateStore((state) => state);

    return (
        <div className="w-full bg-white dark:bg-black py-16">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                    {projectsTranslate[language]?.title}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xg:grid-cols-4 gap-8">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col border-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400 transition-all"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                                {project.project}
                            </h2>
                            <div className="relative w-full h-40 mb-4">
                                <Image
                                    src={project.image}
                                    alt={`${project.project} image`}
                                    className="object-cover rounded-md"
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    priority={true}
                                />
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                {project.description[language]}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <Badge
                                        key={index}
                                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                            <div className="flex justify-between">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                                >
                                    <FaGithub />
                                    GitHub
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                                >
                                    <GrDeploy />
                                    Deploy
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
