import axios, {AxiosResponse} from "axios";
import {UsersResponseModel} from "../responseModels/UsersResponseModel";
import {UserPostsResponseModel} from "../responseModels/UserPostsResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});

const getAllUsers = (): Promise<AxiosResponse<UsersResponseModel>> => {
    return axiosInstance.get('/users');

};

const getPostByUserId = (id: number): Promise<AxiosResponse<UserPostsResponseModel>> => {
    return axiosInstance.get('/users/' + id + '/posts')
};

export {axiosInstance, getAllUsers, getPostByUserId};