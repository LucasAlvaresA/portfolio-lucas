"use client";

import { useTranslateStore } from "@/stores/translate-store";
import { aboutMeTranslate } from "@/translate/about-me";
import Image from "next/image";
import wallpaper from "../../../public/wallpapers/wallpaper.jpg";
import lightWallpaper from "../../../public/wallpapers/light-wallpaper.jpg";
import mobileWallpaper from "../../../public/wallpapers/mobile-wallpaper.jpg";
import lightMobileWallpaper from "../../../public/wallpapers/light-mobile-wallpaper.jpg";

export const AboutMe = () => {
    const { language } = useTranslateStore((state) => state);

    return (
        <div className="h-screen w-full bg-white dark:bg-black">
            <div className="relative flex flex-col md:flex-row justify-center md:justify-end dark:md:justify-start items-center h-full p-0 md:p-12 lg:p-28 dark:items-center">
                <div className="hidden sm:block">
                    <Image
                        src={lightWallpaper}
                        alt="Light Wallpaper"
                        fill
                        style={{ objectFit: "cover" }}
                        className="absolute top-0 left-0 z-0 dark:hidden"
                        priority
                    />
                    <Image
                        src={wallpaper}
                        alt="Wallpaper"
                        fill
                        style={{ objectFit: "cover" }}
                        className="absolute top-0 left-0 z-0 hidden dark:block"
                        priority
                    />
                </div>
                {/* <div className="block sm:hidden">
                    <Image
                        src={mobileWallpaper}
                        alt="Mobile Wallpaper"
                        fill
                        style={{ objectFit: "cover" }}
                        className="absolute top-0 left-0 z-0 hidden dark:block"
                        priority
                    />
                    <Image
                        src={lightMobileWallpaper}
                        alt="Light Mobile Wallpaper"
                        fill
                        style={{ objectFit: "cover" }}
                        className="absolute top-0 left-0 z-0 dark:hidden"
                        priority
                    />
                </div> */}
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-fadeInWithPulse">
                        Lucas Álvares
                    </h1>
                    <h2 className="dark:text-white text-opacity-80 mt-4 text-sm sm:text-xl md:text-2xl lg:text-3xl font-medium animate-fadeIn">
                        {aboutMeTranslate[language]?.description}
                    </h2>
                </div>
            </div>
        </div>
    );
};
