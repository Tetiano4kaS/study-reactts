import React, {FC} from 'react';
import {IUserModel} from "../../../models/IUser";

interface IProps {
    user: IUserModel
}

type IUserProps = IProps & { children?: React.ReactNode } & { showUser?: (id: number) => void }
const User: FC<IUserProps> = ({user, showUser}) => {
    const onClickHandler = () => {
        if (showUser) {
            showUser(user.id);
        }
    };

    return (
        <div>
            {user.id}
            {user.firstName}
            {user.lastName}
            {user.age}
            {user.birthDate}
            {user.email}
            <img src={user.image} alt={user.lastName}/>
            <button onClick={onClickHandler}>Show details</button>
        </div>
    );
};

export {User};