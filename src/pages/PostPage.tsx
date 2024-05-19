import React, {useEffect, useState} from 'react';
import PostsComponent from "../components/PostContainer/PostsComponent/PostsComponent";
import {useLocation, useParams} from "react-router-dom";
import {userService} from "../services/apiService";
import {IPostModel} from "../models/IPostModel";

const PostPage = () => {
    const location=useLocation();
    const {id} = useParams();
    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        if (id) {
            userService.getPostsByUserId(id).then(({data})=> setPosts(data))
        }
    },[id])

    return (
        <div>
            <PostsComponent userPosts={posts}/>
        </div>
    );
};

export default PostPage;