"use client";

import { skillsData } from "@/data/skills";
import { useTranslateStore } from "@/stores/translate-store";
import { skillsTranslate } from "@/translate/skills";

export const Skills = () => {
    const { language } = useTranslateStore((state) => state);

    return (
        <div className="w-full bg-gray-200 dark:bg-gray-900 py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                    {skillsTranslate[language]?.title}
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-6 sm:grid-cols-3 gap-8">
                    {skillsData.map(({ name, icon: Icon, color }) => (
                        <div
                            key={name}
                            className="flex flex-col items-center transition-transform transform md:hover:scale-110 md:hover:text-opacity-90"
                        >
                            <Icon
                                className={`text-4xl sm:text-5xl md:text-6xl mb-2 transition-colors duration-300 ${color}`}
                            />
                            <span className="text-lg font-medium text-gray-700 dark:text-gray-200 transition-opacity duration-300 md:hover:opacity-80">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
