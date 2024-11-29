import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-black bg-opacity-10 blur-10 mt-auto fixed bottom-0 w-full h-14">
            <div className="flex gap-5 sm:gap-14 w-full xs:justify-start sm:justify-center xs:flex-row sm:flex-row sm:ml-14">
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

            <div className="flex items-center gap-3 ml-auto xs:flex-row xs:justify-start sm:justify-end">
                <LanguageToggle />
                <ThemeToggle />
            </div>
        </div>
    );
};
