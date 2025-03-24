import apiBlogs from "@/services/blogs/blogs.services";
import { useQuery } from "@tanstack/react-query";
import { useBlogsQueryKeys } from '../../query-key/blogs/useBlogsQueryKeys';

type BlogsListProps = {
    limit: number,
    page: number,
    typeBlog?: any,
    search?: string
    idBlog?: string | any | number
    enabled?: boolean
}

export const useBlogsList = ({ limit, page, typeBlog, search, idBlog, enabled = false }: BlogsListProps) => {
    console.log('check idBlog: ', idBlog);

    const { getListBlogs } = useBlogsQueryKeys();
    const { key, options } = getListBlogs.list({ page, typeBlog, search, idBlog });

    const fetchBlogsList = async () => {
        try {
            const dataSubmit: any = {}; // hoặc cụ thể kiểu nếu muốn
            console.log('check0');

            if (typeBlog && typeBlog.id !== 0) {
                dataSubmit.type_blog = [typeBlog.id];
            }
            console.log('check1');

            if (search) {
                dataSubmit.search = search;
            }
            console.log('check2');

            if (idBlog) {
                dataSubmit.id = idBlog;
            }
            console.log('check3');

            const { data } = await apiBlogs.getListBlogs(page, limit, dataSubmit);

            console.log('data', data);


            return data
        } catch (err) {
            throw err;
        }
    };

    return useQuery({
        queryKey: [...key],
        queryFn: fetchBlogsList,
        retry: 3,
        gcTime: 5000,
        enabled: enabled,
        ...options, // Dùng options chung từ `queryKeys`
    });
};
