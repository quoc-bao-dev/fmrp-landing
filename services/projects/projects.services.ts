import { instanceDefault } from "@/utils/axios/AxiosCustomize";

const apiProjects = {
  async getProjectMenu() {
    return await instanceDefault.get(`/project/get_field`);
  },
  async getProjectCategory() {
    return await instanceDefault.get(`/project/get_category`);
  },

  async getProjectList(params: any) {
    return await instanceDefault.get(`/project/list`, { params });
  },

  async getProjectDetail(id: string): Promise<any> {
    return await instanceDefault.get(`/api/project/detail/${id}`);
  },
};

export default apiProjects;
