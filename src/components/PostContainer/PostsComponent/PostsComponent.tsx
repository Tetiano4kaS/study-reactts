import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../../../models/IPostModel";
import {postService} from "../../../services/apiService";
import PostComponent from "../PostComponent/PostComponent";
interface IProps {
    userPosts:IPostModel[]
}

const PostsComponent:FC <IProps> = ({userPosts}) => {
    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        postService.getAllPosts().then(({data}) => setPosts(data))
    }, [])
    const postsToRender = userPosts || posts;
    return (
        <div>
            <ul>
            {postsToRender.map(post => <li key={post.id}><PostComponent key={post.id} post={post}/></li>)}
            </ul>
        </div>
    );
};

export default PostsComponent;