import { create } from "zustand";

interface InitialStateStore {
    isStateClientLayout: {
        header: {
            isActiveService: boolean;
            isShowMenuScreen: boolean;
            selectedLanguage: any;
            openDropdownProfile: boolean;
        },
    };
    queryKeyIsStateClientLayout: (key: any) => void;
}

export const useStateClientLayout = create<InitialStateStore>((set) => ({
    isStateClientLayout: {
        header: {
            isActiveService: false,
            isShowMenuScreen: false,
            selectedLanguage: undefined,
            openDropdownProfile: false,
        },
    },
    queryKeyIsStateClientLayout: (key: any) =>
        set((state) => ({
            ...state,
            isStateClientLayout: {
                ...state.isStateClientLayout,
                ...key,
            },
        })),
}));
