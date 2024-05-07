import React, {FC} from 'react';
import {IUserModel} from "../../../models/IUser";

interface IProps {
    user: IUserModel
}


const UserDetails: FC<IProps> = ({user}) => {
    return (
        <div>
            {user.id}
            {user.firstName}
            {user.lastName}
            {user.age}
            {user.birthDate}
            {user.email}
            <img src={user.image} alt={user.lastName}/>
            {user.university}
            {user.company?.name}
        </div>
    );
};

export default UserDetails;