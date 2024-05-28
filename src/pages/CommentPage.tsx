import React, {useEffect, useState} from 'react';
import CommentsComponent from "../components/CommentContainer/CommentsComponent/CommentsComponent";
import {useParams} from "react-router-dom";
import {ICommentModel} from "../models/ICommentModel";
import {postService} from "../services/apiService";

const CommentPage = () => {
    const {id}=useParams();
    const [comments, setComments]=useState<ICommentModel[]>([]);
    useEffect(()=>{
        if (id){
            postService.getCommentsByPostId(id).then(({data})=>setComments(data))
        }
    },[id])

    return (
        <div>
            <CommentsComponent postComments={comments}/>
        </div>
    );
};

export default CommentPage;