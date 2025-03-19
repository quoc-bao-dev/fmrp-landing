import apiBlogs from "@/services/blogs/blogs.services";
import { useQuery } from "@tanstack/react-query";

type BlogsListProps = {
    limit: number,
    page: number
}

export const useBlogsList = ({ limit, page }: BlogsListProps) => {

    const fetchBlogsList = async () => {
        try {
            const { data } = await apiBlogs.getListBlogs(page, limit);

            return data
        } catch (err) {
            throw err;
        }
    };


    return useQuery({
        queryKey: ["getListBlogs", page],
        queryFn: fetchBlogsList,
        retry: 3,
        gcTime: 5000,
    });
};
