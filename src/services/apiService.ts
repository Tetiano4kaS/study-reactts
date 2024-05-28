import {IRes} from "../types/IRes";
import {IUserModel} from "../models/IUserModel";

import {axiosInstance} from "../urls/url";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

const userService = {
    getAllUsers: (): IRes<IUserModel[]> => {
        return axiosInstance.get('/users')
    },
    getPostsByUserId: (userId:string): IRes<IPostModel[]> =>{
        return axiosInstance.get(`/users/${userId}/posts`)
    }
}

const postService = {
    getAllPosts: (): IRes<IPostModel[]> =>{
        return axiosInstance.get('/posts')
    },
    getCommentsByPostId: (postId:string):IRes<ICommentModel[]>=>{
        return axiosInstance.get(`/posts/${postId}/comments`)
    }
}

const commentService = {
    getAllComments: (): IRes<ICommentModel[]>=>{
        return axiosInstance.get('/comments')
    }
}
export {userService, postService, commentService}