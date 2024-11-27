"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select";
import { useTranslateStore } from "@/stores/translate-store";
import { LanguagesIcon } from "lucide-react";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";

export const LanguageToggle = () => {
    const { language, setLanguage } = useTranslateStore();

    return (
        <Select
            value={language}
            onValueChange={(value) => setLanguage(value as "en" | "br")}
        >
            <SelectTrigger className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md w-26 hover:border-primary transition">
                <LanguagesIcon className="w-4 h-4 " />
            </SelectTrigger>
            <SelectContent align="end">
                <SelectItem value="en">
                    <div className="flex flex-row gap-3">
                        <LiaFlagUsaSolid className="w-5 h-5" />
                        English
                    </div>
                </SelectItem>
                <SelectItem value="br">
                    <div className="flex flex-row gap-3 ">
                        <GiBrazilFlag className="w-5 h-5" />
                        Português
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>
    );
};
