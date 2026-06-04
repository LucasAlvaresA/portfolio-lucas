import { OtherProject } from "@/types/other-project";

export const otherProjectsData: OtherProject[] = [
    {
        id: 1,
        project: "Metaverse Madness",
        image: "/projects/metaverse-madness-wallpaper.png",
        github: "https://github.com/LucasAlvaresA/metaverse-madness",
        demo: "https://metaverse-lucasa.vercel.app/",
        technologies: ["Next.js", "TailwindCSS", "Framer"],
        description: {
            en: "A modern website created with Next.js, Tailwind CSS and animations with Framer",
            br: "Um site moderno criado com Next.js, Tailwind CSS e animações com Framer",
            es: "Un sitio web moderno creado con Next.js, Tailwind CSS y animaciones con Framer",
        },
    },
    {
        id: 2,
        project: "Shadcn-UI Store",
        image: "/projects/shadcn-store-wallpaper.png",
        github: "https://github.com/LucasAlvaresA/shadcn-ui-store",
        demo: "https://shadcn-store-lucas.vercel.app/",
        technologies: [
            "Next.js",
            "Typescript",
            "TailwindCSS",
            "Shadcn-UI",
            "Zustand",
        ],
        description: {
            en: "A store created with Next.js, Shadcn UI, TailwindCSS and Zustand",
            br: "Uma loja criada com Next.js, Shadcn UI, TailwindCSS e Zustand",
            es: "Una tienda creada con Next.js, Shadcn UI, TailwindCSS y Zustand",
        },
    },
    {
        id: 3,
        project: "Home Starbucks",
        image: "/projects/home-starbucks-wallpaper.png",
        github: "https://github.com/LucasAlvaresA/home-starbucks",
        demo: "https://lucasalvaresa.github.io/home-starbucks/",
        technologies: ["HTML", "CSS"],
        description: {
            en: "Starbucks homepage created with HTML/CSS",
            br: "Página inicial do Starbucks criada com HTML/CSS",
            es: "Página principal de Starbucks creada con HTML/CSS",
        },
    },
];
