import { create } from "zustand";

interface InitialStateStore {
    isStatePageFmrp: {

    };
    queryKeyIsStatePageFmrp: (key: any) => void;
}

export const useStatePageFmrp = create<InitialStateStore>((set) => ({
    isStatePageFmrp: {

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
