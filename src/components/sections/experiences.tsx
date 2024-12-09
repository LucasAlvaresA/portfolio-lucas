"use client";

import { experiencesData } from "@/data/experiences";
import { useTranslateStore } from "@/stores/translate-store";
import { experiencesTranslate } from "@/translate/experiences";
import { useState } from "react";

export const Experiences = () => {
    const { language } = useTranslateStore((state) => state);
    const [selectedExperience, setSelectedExperience] = useState(
        experiencesData[0]
    );

    return (
        <div className="w-full bg-gray-200 dark:bg-gray-900 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
                    {experiencesTranslate[language]?.title}
                </h1>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 w-full md:w-1/3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
                        <ul className="space-y-2">
                            {experiencesData.map((exp) => (
                                <li
                                    key={exp.id}
                                    className={`p-2 rounded-lg cursor-pointer text-center md:text-left ${
                                        selectedExperience.id === exp.id
                                            ? "bg-primary text-white font-bold"
                                            : "hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`}
                                    onClick={() => setSelectedExperience(exp)}
                                >
                                    {exp.company}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex-grow w-full md:w-2/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-semibold text-primary dark:text-white text-opacity-85 mb-2">
                            {selectedExperience.role[language]}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            {selectedExperience.period}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {selectedExperience.description[language]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
