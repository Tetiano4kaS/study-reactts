import React, {useEffect} from 'react';
import {UsersComponent} from "../components/UsersComponent";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {userActions} from "../redux/slices";

const UsersPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    },[])

    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;