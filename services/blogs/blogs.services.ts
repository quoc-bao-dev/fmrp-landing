import { instanceDefault } from "@/utils/axios/AxiosCustomize";;

const apiBlogs = {
    // get type category
    async getListTypeBlog(): Promise<any> {
        return await instanceDefault.get(`/category/getListTypeBlog`);
    },

    // get list blog
    async getListBlogs(page: string | number = 1, limit: string | number = 10): Promise<any> {
        return await instanceDefault.get(`/blog/getListBlog?current_page=${page}&per_page=${limit}`);
    },

    // get detail blog
    async getDetailBlog(id: string, data: any): Promise<any> {
        return await instanceDefault.get(`/blog/getDetail/${id}`, data);
    },
};

export default apiBlogs;
