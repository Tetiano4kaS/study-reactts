import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../../../models/IPostModel";
import {postService} from "../../../services/apiService";
import PostComponent from "../PostComponent/PostComponent";

interface IProps {
    userPosts: IPostModel[]
}

const PostsComponent: FC<IProps> = ({userPosts}) => {
    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        if (!userPosts || userPosts.length === 0) {
            postService.getAllPosts().then(({data}) => setPosts(data))
        }
    }, [userPosts])
    return (
        <div>
            <ul>
                {(userPosts && userPosts.length > 0 ? userPosts : posts).map(post => <li key={post.id}><PostComponent
                    key={post.id} post={post}/></li>)}
            </ul>
        </div>
    );
};

export default PostsComponent;