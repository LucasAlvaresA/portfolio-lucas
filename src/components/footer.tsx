"use client";

import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";
import { useTranslateStore } from "@/stores/translate-store";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    const { language } = useTranslateStore((state) => state);

    return (
        <footer className="flex justify-between items-center p-4 bg-black bg-opacity-10 blur-10 mt-auto fixed bottom-0 w-full">
            <div className="flex justify-center gap-14  w-full ml-14">
                <Link
                    href="https://github.com/LucasAlvaresA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-secondary transition"
                >
                    <FaGithub size={20} />
                    GitHub
                </Link>
                <Link
                    href="https://www.linkedin.com/in/lucas-alvaress/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-secondary transition"
                >
                    <FaLinkedin size={20} />
                    LinkedIn
                </Link>
            </div>
            <div className="flex items-center gap-3 ml-auto">
                <LanguageToggle />
                <ThemeToggle />
            </div>
        </footer>
    );
};
