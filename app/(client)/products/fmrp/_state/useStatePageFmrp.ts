import { create } from "zustand";

interface InitialStateStore {
    isStatePageFmrp: {
        isOpenAccordion: boolean
    };
    queryKeyIsStatePageFmrp: (key: any) => void;
}

export const useStatePageFmrp = create<InitialStateStore>((set) => ({
    isStatePageFmrp: {
        isOpenAccordion: false
    },
    queryKeyIsStatePageFmrp: (key: any) =>
        set((state) => ({
            ...state,
            isStatePageFmrp: {
                ...state.isStatePageFmrp,
                ...key,
            },
        })),
}));
