import axios, {AxiosResponse} from "axios";
import {IPostService} from "../../models/IPostService";
import {IPostModel} from "../../models/IPostModel";

const axiosInstance=axios.create({baseURL:'https://jsonplaceholder.typicode.com'});

const postService={
    savePost: ({title,body,userId}: IPostService): Promise<AxiosResponse<IPostModel>> => {
        return axiosInstance.post(`/posts`,{title,body,userId},{headers:{"Content-type": "application/json"}})
    }
};

export {postService}