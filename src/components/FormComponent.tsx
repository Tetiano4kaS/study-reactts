import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postsValidator} from "../validators/postsValidator";
import {IPostModel} from "../models/IPostModel";
import {postService} from "../services/postService/api.service";

interface IForm {
    title: string,
    body: string,
    userId: number;
}

const FormComponent: FC = () => {
    let {register, handleSubmit, formState: {errors}} = useForm<IForm>(
        {mode: "all", resolver: joiResolver(postsValidator)})
    const [post, setPost] = useState<IPostModel | null>(null)

    const save = (post: IForm) => {
        postService.savePost(post).then(post => setPost(post.data))
    }


    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type={"text"} {...register("title")}/>
                {errors.title && <span>{errors.title.message}</span>}
                <input type={"text"} {...register("body")}/>
                {errors.body && <span>{errors.body.message}</span>}
                <input type={"number"} {...register("userId")}/>
                {errors.userId && <span>{errors.userId.message}</span>}
                <button>save</button>
            </form>
            {post && <h3>saved post {post?.id}{post?.title}</h3>}
        </div>
    );
};

export default FormComponent;