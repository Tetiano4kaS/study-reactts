import React, {useEffect, useState} from 'react';
import {userService} from "../../../services/apiService";
import {IUserModel} from "../../../models/IUserModel";
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent = () => {
    const [users, setUsers]=useState<IUserModel[]>([]);
    useEffect(()=>{
        userService.getAllUsers().then(({data})=>setUsers(data))
    },[])
    return (
        <div>
            {users.map(user=><UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;