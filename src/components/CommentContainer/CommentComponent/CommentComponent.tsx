import React, {FC} from 'react';
import {ICommentModel} from "../../../models/ICommentModel";
interface IProp{
    comment:ICommentModel
}
const CommentComponent:FC <IProp> = ({comment}) => {
    return (
        <div>
            {comment.name}
            <br/>
            {comment.body}
        </div>
    );
};

export default CommentComponent;