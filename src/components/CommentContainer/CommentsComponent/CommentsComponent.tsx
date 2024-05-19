import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../../../models/ICommentModel";
import {commentService} from "../../../services/apiService";
import CommentComponent from "../CommentComponent/CommentComponent";

const CommentsComponent = () => {
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        commentService.getAllComments().then(({data}) => setComments(data))
    }, [])
    return (
        <div>
            <ul>
                {comments.map(comment => <li key={comment.id}> <CommentComponent key={comment.id} comment={comment}/> </li>)}
            </ul>
        </div>
    );
};

export default CommentsComponent;