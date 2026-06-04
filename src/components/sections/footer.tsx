import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeToggle } from "../theme-toggle";
import { LanguageToggle } from "../language-toggle";

export const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full h-14 flex items-center justify-between p-8 bg-black/10 backdrop-blur-md">
            <div className="flex items-center gap-5 sm:gap-14">
                <Link
                    href="https://github.com/LucasAlvaresA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-secondary transition"
                >
                    <FaGithub size={20} />
                    <span className="hidden sm:block">GitHub</span>
                </Link>

                <Link
                    href="https://www.linkedin.com/in/lucas-alvaress/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-secondary transition"
                >
                    <FaLinkedin size={20} />
                    <span className="hidden sm:block">LinkedIn</span>
                </Link>
            </div>

            <div className="flex items-center gap-3">
                <LanguageToggle />
                <ThemeToggle />
            </div>
        </div>
    );
};
