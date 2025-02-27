import { create } from "zustand";

interface InitialStateStore {
    isStateClientLayout: {
        header: {
            isVisibleHeader: boolean;
            isActiveSubMenu: string | null;
            isShowMenuScreen: boolean;
            openDropdownProfile: boolean;
        },
        language: {
            selectedLanguage: any;
        }
    };
    queryKeyIsStateClientLayout: (key: any) => void;
}

export const useStateClientLayout = create<InitialStateStore>((set) => ({
    isStateClientLayout: {
        header: {
            isVisibleHeader: false,         // hiển thị header animation
            isActiveSubMenu: null,         // hiển thị active sub menu con
            isShowMenuScreen: false,        // hiển thị menuscreen cho màn tablet
            openDropdownProfile: false,     // Hiển thị dropdown của profile account
        },
        language: {
            selectedLanguage: undefined,    // Chọn ngôn ngữ
        }
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
