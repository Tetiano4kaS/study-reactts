import React, {FC, useEffect, useState} from 'react';
import {ICommentModel} from "../../../models/ICommentModel";
import {commentService} from "../../../services/apiService";
import CommentComponent from "../CommentComponent/CommentComponent";
interface IProps {
    postComments:ICommentModel[],

}

const CommentsComponent:FC <IProps> = ({postComments}) => {
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        if (!postComments || postComments.length === 0){
        commentService.getAllComments().then(({data}) => setComments(data))
    }}, [postComments])
    return (
        <div>
            <ul>
                {(postComments && postComments.length > 0 ? postComments : comments).map(comment => <li key={comment.id}> <CommentComponent key={comment.id} comment={comment}/> </li>)}
            </ul>
        </div>
    );
};

export default CommentsComponent;