import { LanguageTypes } from "./language.types";

const INITIAL_STATE = {
    language: 'FR'
};

const languageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LanguageTypes.SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            };
        default:
            return state;
    };
};

export default languageReducer;