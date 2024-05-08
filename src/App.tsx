import React, {useState} from 'react';
import './App.css';
import {Users} from "./components/UserContainer/Users/Users";
import {getPostByUserId} from "./services/user.api.service";
import {IPostModel} from "./models/IPost";
import UserPosts from "./components/UserPostsComponent/UserPosts";


const App = () => {

    const [posts,setPosts]=useState<IPostModel[]>([])

const showUser= (userId:number)=>{
    getPostByUserId(userId).then(({data:{posts}})=>{
        setPosts(posts)
    })
}
    return (
        <div>
          <div> <Users showUser={showUser}/></div>
            <hr/>
            {posts.map((post) =><UserPosts post={post} key={post.id}/>)}

        </div>
    );
};


export default App;