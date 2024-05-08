import React, {FC} from 'react';
import UserPosts from "../../UserPostsComponent/UserPosts";
import {IPostModel} from "../../../models/IPost";
interface IProps{
    posts:IPostModel[]
}
const UserPostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts.map((post) =><UserPosts post={post} key={post.id}/>)}
        </div>
    );
};

export default UserPostsComponent;