import React, {FC} from 'react';
import {IUserModel} from "../../../models/IUserModel";
import {useNavigate} from "react-router-dom";

interface IProps{
    user:IUserModel
}
const UserComponent:FC <IProps> = ({user}) => {
    const navigate=useNavigate();
    return (
        <div>
            {user.name}
            {user.username}
            <button onClick={()=>{
              navigate(user.id.toString()+'/posts')
            }}>Show user posts</button>
        </div>
    );
};

export default UserComponent;