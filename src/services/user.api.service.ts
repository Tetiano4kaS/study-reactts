import axios, {AxiosResponse} from "axios";
import {UsersResponseModel} from "../responseModels/UsersResponseModel";
import {IUserModel} from "../models/IUser";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});

const getAllUsers = (): Promise<AxiosResponse<UsersResponseModel>> => {
    return axiosInstance.get('/users');

    };

const getUserById=  (id:number): Promise<AxiosResponse<IUserModel>> =>{
    return axiosInstance.get('/users/' + id)
};

export {axiosInstance, getAllUsers, getUserById};