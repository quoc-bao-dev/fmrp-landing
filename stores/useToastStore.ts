import { create } from "zustand";

export interface IToastStore {
    openToast: boolean;
    type?: "success" | "error" | "warning";
    message?: string;
    title?: string;
    showType: boolean;
    setToast: (
        key: any,
        type?: "success" | "error" | "warning",
        showType?: boolean,
        message?: string,
        title?: string
    ) => void;
}

export const useToastStore = create<IToastStore>((set) => ({
    openToast: false,
    type: "success",
    message: "",
    title: "",
    showType: false,
    setToast: (
        key: any,
        type?: "success" | "error" | "warning",
        showType?: boolean,
        message?: string,
        title?: string
    ) =>
        set((state) => ({
            openToast: key,
            type,
            showType,
            message,
            title,
        })),
}));