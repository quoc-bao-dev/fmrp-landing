import { IFilterBlog } from "@/types/blog/IBlog";
import { create } from "zustand";

interface InitialStateStore {
    isStatePageBlogs: {
        isSelectedCategory?: IFilterBlog
    };
    queryKeyIsStatePageBlogs: (key: any) => void;
}

export const useStatePageBlogs = create<InitialStateStore>((set) => ({
    isStatePageBlogs: {
        isSelectedCategory: undefined

    },
    queryKeyIsStatePageBlogs: (key: any) =>
        set((state) => ({
            ...state,
            isStatePageBlogs: {
                ...state.isStatePageBlogs,
                ...key,
            },
        })),
}));
