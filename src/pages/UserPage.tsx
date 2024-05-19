import React from 'react';
import UsersComponent from "../components/UserContainer/UsersComponent/UsersComponent";
import {Outlet} from "react-router-dom";

const UserPage = () => {
    return (
        <div>
            <UsersComponent/>
            <Outlet/>
        </div>
    );
};

export default UserPage;