import {IUserModel} from "../models";
import {axiosInstance} from "./axiosService";
import {urls} from "../constans";

import {AxiosResponse} from "axios";

const userService = {
    getAll: async (): Promise<IUserModel[]> => {
        const response = await axiosInstance.get<IUserModel[]>(urls.users.base);
        return response.data
    },
    getById: async (id:string): Promise<AxiosResponse<IUserModel>> =>{
        const response= axiosInstance.get<IUserModel>(urls.users.byId(+id));
        return response;
    }
}

export {userService}