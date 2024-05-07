import React, {useState} from 'react';
import './App.css';
import {Users} from "./components/UserContainer/Users/Users";
import {getUserById} from "./services/user.api.service";
import {IUserModel} from "./models/IUser";
import UserDetails from "./components/UserContainer/UserDetails/UserDetails";


const App = () => {

    const [user,setUser]=useState<IUserModel>()

const showUser= (id:number)=>{
    getUserById(id).then(({data})=>{
        console.log(data);
        setUser(data)
    })
}
    return (
        <div>
          <div> <Users showUser={showUser}/></div>
            <hr/>
            {user && <div><UserDetails user={user}/></div>}
        </div>
    );
};


export default App;