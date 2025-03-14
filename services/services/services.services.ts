import { instanceDefault } from "@/utils/axios/AxiosCustomize";;

const apiServices = {
    // get danh sách loại dịch vụ
    async getListTypeService(): Promise<any> {
        return await instanceDefault.get(`/category/getListTypeService`);
    },
};

export default apiServices;
