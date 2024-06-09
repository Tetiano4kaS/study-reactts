import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../models/AuthDataModel";
import {authService} from "../services/api.service";

const FormComponent = () => {
    const {register, handleSubmit, getValues} = useForm<AuthDataModel>();
    const [isAuthState, setIsAuthState]=useState<boolean>(false);

const authenticate=async (formData:AuthDataModel)=>{
const isAuth=await authService.authentication(formData);
setIsAuthState(isAuth);
};
    const handleRegister = async () => {
        const formData = getValues(); // отримуємо дані з форми
        const isRegistered = await authService.registerUser(formData);
        if (isRegistered) {
            alert('Registration successful');
        } else {
            alert('Registration failed');
        }
    };

    return (
        <div>
            <h3>login form</h3>
            <div>
                {isAuthState?<span>ok</span>:<span>not ok</span>}
            </div>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type='text' {...register('username')}/>
                <input type='text' {...register('password')}/>
                <button>login</button>
                <button type="button" onClick={handleRegister}>Register</button>
            </form>
        </div>
    );
};

export default FormComponent;