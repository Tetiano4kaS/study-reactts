import {useAppSelector} from "../hooks/useAppSelector";
import UserComponent from "./UserComponent";
import React from "react";

const UsersComponent = () => {
    const {users} = useAppSelector(state => state.users)

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersComponent}