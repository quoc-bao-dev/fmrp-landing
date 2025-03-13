import { create } from "zustand";

interface InitialStateStore {
    isStatePageFmrp: {
        isOpenAccordion: boolean,
        isActiveManagement: any
    };
    queryKeyIsStatePageFmrp: (key: any) => void;
}

export const useStatePageFmrp = create<InitialStateStore>((set) => ({
    isStatePageFmrp: {
        isOpenAccordion: false,
        isActiveManagement: undefined,

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
