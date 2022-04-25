import { LanguageTypes } from "./language.types";

export const setLanguage = (language) => ({
    type: LanguageTypes.SET_LANGUAGE,
    payload: language
});