import { LanguageType } from "@/types/language";
import { create } from "zustand";

type States = {
    language: LanguageType;
};

type Actions = {
    setLanguage: (language: LanguageType) => void;
};

const getInitialLanguage = (): LanguageType => {
    const browserLanguage = navigator.language || navigator.languages[0];
    if (browserLanguage.startsWith("en")) {
        return "en";
    } else if (browserLanguage.startsWith("pt")) {
        return "br";
    }
    return "en";
};

const initialState: States = {
    language: typeof window !== "undefined" ? getInitialLanguage() : "br",
};

export const useTranslateStore = create<States & Actions>()((set) => ({
    ...initialState,
    setLanguage: (language: LanguageType) => set({ language }),
}));
