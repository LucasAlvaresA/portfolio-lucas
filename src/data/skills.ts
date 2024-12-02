import { Skill } from "@/types/skill";
import {
    FaBootstrap,
    FaCss3,
    FaHtml5,
    FaNodeJs,
    FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiGamemaker, SiStyledcomponents, SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const skillsData: Skill[] = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "React", icon: FaReact, color: "text-blue-500" },
    {
        name: "Next.js",
        icon: RiNextjsFill,
        color: "text-gray-900 dark:text-white",
    },
    { name: "React Native", icon: TbBrandReactNative, color: "text-blue-400" },
    {
        name: "Styled Components",
        icon: SiStyledcomponents,
        color: "text-pink-500",
    },
    { name: "TailwindCSS", icon: RiTailwindCssFill, color: "text-blue-400" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
    { name: "NodeJS", icon: FaNodeJs, color: "text-green-600" },
    { name: "Gamemaker", icon: SiGamemaker, color: "text-red-500" },
];
