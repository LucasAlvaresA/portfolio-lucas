"use client";

import { useEffect, useState } from "react";
import { useTranslateStore } from "@/stores/translate-store";
import { projectsTranslate } from "@/translate/projects";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaFilePdf } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";

export const Projects = () => {
    const { language } = useTranslateStore((state) => state);

    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(1);

    useEffect(() => {
        if (!api) return;

        const update = () => {
            setCurrent(api.selectedScrollSnap() + 1);
        };

        update();
        api.on("select", update);

        return () => {
            api.off("select", update);
        };
    }, [api]);

    return (
        <section className="w-full bg-white dark:bg-black py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col items-center gap-3 mb-12">
                    <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
                        {projectsTranslate[language]?.title}
                    </h1>

                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {current} / {projectsData.length}
                    </span>
                </div>

                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {projectsData.map((project) => (
                            <CarouselItem
                                key={project.id}
                                className="basis-full"
                            >
                                <article
                                    className="
                                        overflow-hidden
                                        rounded-3xl
                                        border
                                        border-gray-200
                                        dark:border-gray-800
                                        bg-gray-50
                                        dark:bg-zinc-900/70
                                        backdrop-blur-sm
                                        shadow-sm
                                        hover:shadow-xl
                                        transition-all
                                        duration-300
                                    "
                                >
                                    <div className="grid lg:grid-cols-2">
                                        <div className="p-6 lg:p-8 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/30 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl">
                                            <div
                                                className="
                                                    w-full
                                                    shadow-lg
                                                    rounded-xl
                                                    overflow-hidden
                                                    border
                                                    border-gray-200
                                                    dark:border-zinc-800
                                                "
                                            >
                                                <Image
                                                    src={project.image}
                                                    alt={
                                                        project.project[
                                                            language
                                                        ]
                                                    }
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    priority
                                                    className="
                                                        w-full
                                                        h-auto
                                                        object-cover
                                                        transition-transform
                                                        duration-500
                                                        hover:scale-[1.02]
                                                    "
                                                />
                                            </div>
                                        </div>

                                        <div className="p-8 lg:p-10 flex flex-col justify-center">
                                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                                {project.project[language]}
                                            </h2>

                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                                {project.description[language]}
                                            </p>

                                            <div className="mb-6">
                                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                                    {
                                                        projectsTranslate[
                                                            language
                                                        ].analyzedMetrics
                                                    }
                                                </h3>

                                                <div className="flex flex-wrap gap-2">
                                                    {project.highlights.map(
                                                        (highlight, index) => (
                                                            <Badge
                                                                key={index}
                                                                className="rounded-full px-3 py-1"
                                                            >
                                                                {
                                                                    highlight[
                                                                        language
                                                                    ]
                                                                }
                                                            </Badge>
                                                        ),
                                                    )}
                                                </div>
                                            </div>

                                            <div className="mb-8">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map(
                                                        (tech, index) => (
                                                            <Badge
                                                                key={index}
                                                                variant="secondary"
                                                                className="rounded-full px-3 py-1"
                                                            >
                                                                {tech[language]}
                                                            </Badge>
                                                        ),
                                                    )}
                                                </div>

                                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                                                    {project.methodologies
                                                        .map(
                                                            (item) =>
                                                                item[language],
                                                        )
                                                        .join(" • ")}
                                                </p>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <a
                                                    href={project.pdf}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    gap-2
                                                    rounded-xl
                                                    bg-red-600
                                                    text-white
                                                    px-5
                                                    py-3
                                                    hover:bg-red-700
                                                    transition
                                                    "
                                                >
                                                    <FaFilePdf />
                                                    {
                                                        projectsTranslate[
                                                            language
                                                        ].viewPdf
                                                    }
                                                </a>

                                                <Link
                                                    href={`/projects/${project.slug}`}
                                                    className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    gap-2
                                                    rounded-xl
                                                    border
                                                    border-gray-300
                                                    dark:border-gray-700
                                                    px-5
                                                    py-3
                                                    hover:bg-gray-100
                                                    dark:hover:bg-gray-800
                                                    transition
                                                    "
                                                >
                                                    <MdDashboard />
                                                    {
                                                        projectsTranslate[
                                                            language
                                                        ].viewDashboard
                                                    }
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="hidden md:flex -left-6" />
                    <CarouselNext className="hidden md:flex -right-6" />
                </Carousel>
            </div>
        </section>
    );
};
