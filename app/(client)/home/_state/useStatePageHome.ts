import { create } from "zustand";

interface InitialStateStore {
    isStatePageHome: {

    };
    queryKeyIsStatePageHome: (key: any) => void;
}

export const useStatePageHome = create<InitialStateStore>((set) => ({
    isStatePageHome: {

    },
    queryKeyIsStatePageHome: (key: any) =>
        set((state) => ({
            ...state,
            isStatePageHome: {
                ...state.isStatePageHome,
                ...key,
            },
        })),
}));
