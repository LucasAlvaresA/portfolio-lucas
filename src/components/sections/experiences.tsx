"use client";

import { experiencesData } from "@/data/experiences";
import { useTranslateStore } from "@/stores/translate-store";
import { experiencesTranslate } from "@/translate/experiences";

export const Experiences = () => {
    const { language } = useTranslateStore((state) => state);

    return (
        <section className="w-full bg-gray-200 dark:bg-gray-900 py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
                    {experiencesTranslate[language]?.title}
                </h1>

                <div className="relative">
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

                    <div className="space-y-10">
                        {experiencesData.map((experience) => (
                            <div
                                key={experience.id}
                                className="relative flex gap-6"
                            >
                                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg">
                                    •
                                </div>

                                <div
                                    className="
                                        flex-1
                                        rounded-2xl
                                        border
                                        border-gray-200
                                        dark:border-gray-800
                                        bg-white
                                        dark:bg-zinc-900/70
                                        backdrop-blur-sm
                                        p-5
                                        hover:-translate-y-1
                                        hover:shadow-xl
                                        transition-all
                                        duration-300
                                    "
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                                            {experience.title[language]}
                                        </h2>

                                        <span className="text-sm font-semibold text-blue-500">
                                            {experience.year}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400">
                                        {experience.description[language]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
