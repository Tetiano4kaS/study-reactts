import React, {FC} from 'react';
import {IPostModel} from "../../models/IPost";

interface IProps{
    post:IPostModel
}
type IPropsType=IProps & {children?:React.ReactNode}
const UserPosts: FC<IPropsType> = ({post}) => {
    return (
        <div>
            {post.id}
           <h5> userId: {post.userId}</h5>
            {post.title}
            {post.body}
            {post.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
            {post.reactions}
        </div>
    );
};

export default UserPosts;