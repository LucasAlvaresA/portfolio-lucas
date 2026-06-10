"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Download } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTranslateStore } from "@/stores/translate-store";

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

type Project = {
    project: {
        br: string;
        en: string;
        es: string;
    };

    description: {
        br: string;
        en: string;
        es: string;
    };

    technologies: {
        br: string;
        en: string;
        es: string;
    }[];

    methodologies: {
        br: string;
        en: string;
        es: string;
    }[];

    image: string;
    pdf: string;
};

type Props = {
    project: Project;
};

const translations = {
    br: {
        back: "Voltar",
        technologies: "Tecnologias",
        methodologies: "Metodologias",
        download: "Baixar PDF do Projeto",
        zoomHint: "Toque na imagem para ampliar",
    },

    en: {
        back: "Back",
        technologies: "Technologies",
        methodologies: "Methodologies",
        download: "Download Project PDF",
        zoomHint: "Tap the image to zoom",
    },

    es: {
        back: "Volver",
        technologies: "Tecnologías",
        methodologies: "Metodologías",
        download: "Descargar PDF del Proyecto",
        zoomHint: "Toca la imagen para ampliar",
    },
};

export function ProjectContent({ project }: Props) {
    const { language } = useTranslateStore((state) => state);

    return (
        <main className="min-h-screen bg-white dark:bg-black">
            <header
                className="
                    sticky
                    top-0
                    z-50
                    border-b
                    border-gray-200
                    dark:border-zinc-800
                    bg-white/80
                    dark:bg-black/80
                    backdrop-blur-md
                "
            >
                <div className="max-w-7xl mx-auto px-4 h-16">
                    <div className="grid grid-cols-3 items-center h-full">
                        <div>
                            <Link
                                href="/"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    text-gray-600
                                    dark:text-gray-400
                                    hover:text-black
                                    dark:hover:text-white
                                    transition
                                "
                            >
                                <ArrowLeft size={18} />
                                {translations[language].back}
                            </Link>
                        </div>

                        <div className="flex justify-center">
                            <h2
                                className="
                                    text-sm
                                    md:text-base
                                    font-semibold
                                    text-gray-900
                                    dark:text-white
                                    text-center
                                    truncate
                                    max-w-[250px]
                                    md:max-w-none
                                "
                            >
                                {project.project[language]}
                            </h2>
                        </div>

                        <div className="flex justify-end items-center gap-2">
                            <LanguageToggle />
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
                <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {project.project[language]}
                    </h1>

                    <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description[language]}
                    </p>
                </div>

                <div className="mb-12">
                    <Dialog>
                        <DialogTrigger asChild>
                            <div
                                className="
                                    cursor-zoom-in
                                    overflow-hidden
                                    rounded-none
                                    md:rounded-3xl
                                    border-y
                                    md:border
                                    border-gray-200
                                    dark:border-zinc-800
                                    shadow-none
                                    md:shadow-lg
                                    -mx-4
                                    md:mx-0
                                "
                            >
                                <Image
                                    src={project.image}
                                    alt={project.project[language]}
                                    width={1600}
                                    height={900}
                                    priority
                                    className="
                                        w-full
                                        h-auto
                                        transition-transform
                                        duration-300
                                        hover:scale-[1.01]
                                    "
                                />
                            </div>
                        </DialogTrigger>

                        <DialogContent className="max-w-[95vw] p-0 border-none bg-transparent shadow-none">
                            <DialogTitle className="sr-only">
                                {project.project[language]}
                            </DialogTitle>

                            <Image
                                src={project.image}
                                alt={project.project[language]}
                                width={2200}
                                height={1400}
                                className="w-full h-auto rounded-xl"
                            />
                        </DialogContent>
                    </Dialog>

                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3 md:hidden">
                        {translations[language].zoomHint}
                    </p>
                </div>

                <div className="mb-12 grid gap-8 md:grid-cols-2">
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            {translations[language].technologies}
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="px-3 py-1 rounded-full"
                                >
                                    {tech[language]}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            {translations[language].methodologies}
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {project.methodologies.map((methodology, index) => (
                                <Badge
                                    key={index}
                                    className="px-3 py-1 rounded-full"
                                >
                                    {methodology[language]}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mb-16">
                    <a
                        href={project.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-red-600
                            text-white
                            px-6
                            py-3
                            font-medium
                            hover:bg-red-700
                            transition
                        "
                    >
                        <Download size={18} />
                        {translations[language].download}
                    </a>
                </div>
            </div>
        </main>
    );
}
