"use client";

import { clientsProjectsData } from "@/data/clientsProjects";
import { useTranslateStore } from "@/stores/translate-store";
import { clientsTranslate } from "@/translate/clients";

export const Clients = () => {
    const { language } = useTranslateStore((state) => state);

    return (
        <div className="w-full bg-white dark:bg-black py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-4">
                    {clientsTranslate[language]?.title}
                </h1>

                <p className="text-gray-500 dark:text-gray-300 text-center leading-relaxed">
                    {clientsTranslate[language]?.description}
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {clientsProjectsData.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md overflow-hidden flex flex-col"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-52 object-cover"
                            />

                            <div className="p-4 flex flex-col flex-1">
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {project.title}
                                </h2>

                                <p className="text-gray-600 dark:text-gray-300 flex-1">
                                    {project.description[language]}
                                </p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 ml-auto px-5 py-2 rounded-lg bg-blue-600 text-white dark:bg-blue-500 dark:text-white font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 text-center"
                                >
                                    {clientsTranslate[language]?.buttonTitle}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
