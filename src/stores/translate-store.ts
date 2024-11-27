import { LanguageType } from "@/types/language";
import { create } from "zustand";

type States = {
    language: LanguageType;
};

type Actions = {
    setLanguage: (language: LanguageType) => void;
};

const initialState: States = {
    language: "br",
};

export const useTranslateStore = create<States & Actions>()((set) => ({
    ...initialState,
    setLanguage: (language: LanguageType) => set({ language }),
}));
