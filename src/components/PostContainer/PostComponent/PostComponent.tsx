import React, {FC} from 'react';
import {IPostModel} from "../../../models/IPostModel";
import {useNavigate} from "react-router-dom";

interface IProps {
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {
    const navigate = useNavigate();
    return (
        <div>
            {post.userId}
            {post.title}-- {post.body}
            <button onClick={() => {
                navigate(post.id.toString() + '/comments')
            }}>comments
            </button>
        </div>
    );
};

export default PostComponent;