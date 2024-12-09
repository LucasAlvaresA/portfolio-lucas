"use client";

import { useTranslateStore } from "@/stores/translate-store";
import { gameDevTranslate } from "@/translate/game-dev";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import lobby from "../../../public/games/lobby.gif";
import samurai from "../../../public/games/samurai.gif";
import zelda from "../../../public/games/zelda.gif";
import Autoplay from "embla-carousel-autoplay";

export const GameDev = () => {
    const { language } = useTranslateStore((state) => state);

    return (
        <div className="w-full bg-white dark:bg-black py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-4">
                    {gameDevTranslate[language]?.title}
                </h1>
                <p className="text-gray-500 dark:text-gray-300 text-center leading-relaxed">
                    {gameDevTranslate[language]?.description}
                </p>
                <div className="mt-8 relative">
                    <Carousel
                        opts={{
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 4000,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            <CarouselItem className="flex justify-center items-center w-full">
                                <Image
                                    src={zelda}
                                    alt="zelda gif"
                                    unoptimized
                                    className="max-w-full h-auto"
                                />
                            </CarouselItem>
                            <CarouselItem className="flex justify-center items-center w-full">
                                <Image
                                    src={samurai}
                                    alt="samurai gif"
                                    unoptimized
                                    className="max-w-full h-auto"
                                />
                            </CarouselItem>
                            <CarouselItem className="flex justify-center items-center w-full">
                                <Image
                                    src={lobby}
                                    alt="lobby gif"
                                    unoptimized
                                    className="max-w-full h-auto"
                                />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};
