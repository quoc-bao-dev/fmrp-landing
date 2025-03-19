import apiBlogs from "@/services/blogs/blogs.services";
import apiServices from "@/services/services/services.services";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

interface TypeServicesListParams {
    page?: string | number;
    limit?: string | number;
    language?: string;
}

export const useGetTypeBlogsList = ({
    page,
    limit,
    language,
}: TypeServicesListParams = {}) => {
    const fetchTypeBlogsList = async () => {
        try {
            const { data } = await apiBlogs.getListTypeBlog();

            return data.data
        } catch (err) {
            throw err;
        }
    };

    return useQuery({
        queryKey: ["getListTypeBlog"],
        queryFn: fetchTypeBlogsList,
        placeholderData: keepPreviousData,
        retry: 3,
        gcTime: 5000,
        retryDelay: 1000,
        staleTime: 60000
    });
};
