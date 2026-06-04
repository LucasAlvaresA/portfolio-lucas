"use client";

import { useTranslateStore } from "@/stores/translate-store";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { otherProjectsTranslate } from "@/translate/other-projects";
import { otherProjectsData } from "@/data/other-projects";

export const OtherProjects = () => {
    const { language } = useTranslateStore((state) => state);

    return (
        <div className="w-full bg-white dark:bg-black py-16">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                    {otherProjectsTranslate[language]?.title}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-5">
                    {otherProjectsData.map((project) => (
                        <div
                            key={project.id}
                            className="
                                group
                                overflow-hidden
                                rounded-2xl
                                border
                                border-gray-200
                                dark:border-gray-800
                                bg-white
                                dark:bg-zinc-900/50
                                backdrop-blur-sm
                                shadow-sm
                                hover:shadow-2xl
                                hover:-translate-y-2
                                transition-all
                                duration-300
                                flex flex-col
                            "
                        >
                            <div className="relative h-52 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={`${project.project} image`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    className="
                                        object-cover
                                        transition-transform
                                        duration-500
                                        group-hover:scale-105
                                    "
                                    priority
                                />
                            </div>

                            <div className="flex flex-col flex-1 p-6">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {project.project}
                                </h2>

                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 flex-grow leading-relaxed">
                                    {project.description[language]}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => (
                                        <Badge
                                            key={index}
                                            variant="secondary"
                                            className="rounded-full px-3 py-1 text-xs"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            flex-1
                                            flex
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-xl
                                            border
                                            border-gray-300
                                            dark:border-gray-700
                                            py-2.5
                                            hover:bg-gray-100
                                            dark:hover:bg-gray-800
                                            transition
                                        "
                                    >
                                        <FaGithub />
                                        GitHub
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            flex-1
                                            flex
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-xl
                                            bg-blue-600
                                            text-white
                                            py-2.5
                                            hover:bg-blue-700
                                            transition
                                        "
                                    >
                                        <GrDeploy />
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
