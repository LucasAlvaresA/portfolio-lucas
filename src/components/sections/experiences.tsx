"use client";

import { experiencesData } from "@/data/experiences";
import { useTranslateStore } from "@/stores/translate-store";
import { experiencesTranslate } from "@/translate/experiences";
import { IoIosArrowForward } from "react-icons/io";

export const Experiences = () => {
    const { language } = useTranslateStore((state) => state);

    return (
        <div className="w-full bg-gray-200 dark:bg-gray-900 py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
                    {experiencesTranslate[language]?.title}
                </h1>

                <ul className="space-y-6">
                    {experiencesData.map((experience) => (
                        <li
                            key={experience.id}
                            className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <IoIosArrowForward className="text-blue-500 mt-1 text-xl flex-shrink-0" />
                            <p className="text-gray-700 dark:text-gray-200">
                                {experience.description[language]}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
