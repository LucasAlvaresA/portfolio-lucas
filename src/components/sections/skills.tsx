"use client";

import { skillsData } from "@/data/skills";
import { FaChartBar, FaDatabase, FaCode } from "react-icons/fa";

const categoryIcons = {
    "Dados & BI": <FaDatabase size={22} />,
    "Análise de Dados": <FaChartBar size={22} />,
    Desenvolvimento: <FaCode size={22} />,
};

export const Skills = () => {
    return (
        <section className="w-full bg-gray-200 dark:bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    Habilidades
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillsData.map((group) => (
                        <div
                            key={group.category}
                            className="
                                rounded-2xl
                                border
                                border-gray-200
                                dark:border-gray-800
                                bg-gray-50
                                dark:bg-zinc-900/70
                                backdrop-blur-sm
                                p-6
                                hover:-translate-y-1
                                hover:shadow-xl
                                hover:border-blue-500/30
                                transition-all
                                duration-300
                            "
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="text-blue-500">
                                    {
                                        categoryIcons[
                                            group.category as keyof typeof categoryIcons
                                        ]
                                    }
                                </div>

                                <h2 className="text-lg font-bold tracking-wide text-gray-900 dark:text-white">
                                    {group.category}
                                </h2>
                            </div>

                            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-5" />

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="
                                            px-3
                                            py-1.5
                                            rounded-full
                                            text-sm
                                            font-medium
                                            bg-white
                                            dark:bg-zinc-800/70
                                            border
                                            border-gray-200
                                            dark:border-gray-700
                                            hover:border-blue-500/50
                                            hover:text-blue-400
                                            transition-all
                                            cursor-default
                                        "
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
