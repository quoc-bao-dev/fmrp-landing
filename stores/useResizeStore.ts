import { IResizeStore } from "@/types/ui/resize/IResize";
import { create } from "zustand";

// resize responsive
export const useResizeStore = create<IResizeStore>((set) => ({
    isVisibleMobile: false,
    isVisibleTablet: false,
    isVisibleDesktopXL: false,
    isVisibleDesktopXXL: false,
    isVisibleDesktopLG: false,
    onResizeMobile: () => set({ isVisibleMobile: true }),
    onResizeTablet: () => set({ isVisibleTablet: true }),
    onResizeDesktopLG: () => set({ isVisibleDesktopLG: true }),
    onResizeDesktopXL: () => set({ isVisibleDesktopXL: true }),
    onResizeDesktopXXL: () => set({ isVisibleDesktopXXL: true }),
    onCloseResizeMobile: () => set({ isVisibleMobile: false }),
    onCloseResizeTablet: () => set({ isVisibleTablet: false }),
    onCloseResizeDesktopLG: () => set({ isVisibleDesktopLG: false }),
    onCloseResizeDesktopXL: () => set({ isVisibleDesktopXL: false }),
    onCloseResizeDesktopXXL: () => set({ isVisibleDesktopXXL: false }),
}));