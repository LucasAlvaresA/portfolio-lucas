"use client";

import { useTranslateStore } from "@/stores/translate-store";
import { aboutMeTranslate } from "@/translate/about-me";
import Image from "next/image";
import wallpaper from "../../public/wallpaper.jpg";

export const AboutMe = () => {
    const { language } = useTranslateStore((state) => state);

    return (
        <div className="h-screen w-full bg-black">
            <div className="relative flex justify-center items-center md:items-start lg:items-start flex-col h-full p-0 md:pl-12 lg:pl-28">
                <Image
                    src={wallpaper}
                    alt="Wallpaper"
                    fill
                    style={{ objectFit: "cover" }}
                    className="absolute top-0 left-0 z-0"
                />
                <div className="relative z-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-fadeInWithPulse">
                        Lucas Álvares
                    </h1>
                    <h2 className="text-white text-opacity-80 mt-4 text-sm sm:text-xl md:text-2xl lg:text-3xl font-medium animate-fadeIn">
                        {aboutMeTranslate[language]?.description}
                    </h2>
                </div>
            </div>
        </div>
    );
};
