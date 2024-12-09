"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select";
import { useTranslateStore } from "@/stores/translate-store";
import { LanguagesIcon } from "lucide-react";
import Image from "next/image";
import brazil from "../../public/flags/brazil_flag.svg";
import spain from "../../public/flags/spain_flag.svg";
import usa from "../../public/flags/usa_flag.svg";

export const LanguageToggle = () => {
    const { language, setLanguage } = useTranslateStore();

    return (
        <Select
            value={language}
            onValueChange={(value) => setLanguage(value as "en" | "br" | "es")}
        >
            <SelectTrigger className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md w-26 hover:border-primary transition">
                <LanguagesIcon className="w-4 h-4 " />
            </SelectTrigger>
            <SelectContent align="end">
                <SelectItem value="en">
                    <div className="flex flex-row gap-3">
                        <Image
                            src={usa}
                            alt="USA Flag"
                            width={20}
                            height={20}
                        />
                        English
                    </div>
                </SelectItem>
                <SelectItem value="br">
                    <div className="flex flex-row gap-3">
                        <Image
                            src={brazil}
                            alt="Brazil Flag"
                            width={20}
                            height={20}
                        />
                        Português
                    </div>
                </SelectItem>
                <SelectItem value="es">
                    <div className="flex flex-row gap-3">
                        <Image
                            src={spain}
                            alt="Spain Flag"
                            width={20}
                            height={20}
                        />
                        Español
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>
    );
};
