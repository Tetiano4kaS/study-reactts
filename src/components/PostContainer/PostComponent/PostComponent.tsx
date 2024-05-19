import React, {FC} from 'react';
import {IPostModel} from "../../../models/IPostModel";
interface IProps{
    post:IPostModel
}
const PostComponent:FC <IProps> = ({post}) => {
    return (
        <div>
            {post.userId}
            {post.title}-- {post.body}
        </div>
    );
};

export default PostComponent;