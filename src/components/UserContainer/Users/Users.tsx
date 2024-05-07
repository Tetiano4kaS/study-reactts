import React, {FC, useEffect, useState} from 'react';
import {getAllUsers} from "../../../services/user.api.service";
import {IUserModel} from "../../../models/IUser";
import {User} from "../User/User";

type IPropsType = {
    showUser: (id: number) => void
}

const Users: FC<IPropsType> = ({showUser}) => {

    const [myUsers, setMyUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        getAllUsers().then(({data: {users}}) => setMyUsers(users))
    }, []);

    return (
        <div>
            {myUsers.map((user) => <User key={user.id} user={user} showUser={showUser}/>)}
        </div>
    );
};

export {Users};