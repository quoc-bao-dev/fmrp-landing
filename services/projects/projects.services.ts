import { instanceDefault } from "@/utils/axios/AxiosCustomize";;

const apiProjects = {
    async getProjectDetail(id: string): Promise<any> {
        return await instanceDefault.get(`/api/project/detail/${id}`);
    },
};

export default apiProjects;
