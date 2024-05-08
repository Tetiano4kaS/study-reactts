import React, {useState} from 'react';
import './App.css';
import {Users} from "./components/UserContainer/Users/Users";
import {getPostByUserId} from "./services/user.api.service";
import {IPostModel} from "./models/IPost";
import UserPostsComponent from "./components/UserContainer/UserPostComponent/UserPostsComponent";


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
            { posts && <UserPostsComponent posts={posts}/>}

        </div>
    );
};


export default App;