import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IUserModel} from "../../models";
import {userService} from "../../services";
import {AxiosError} from "axios";

type userSliceType = {
    users: IUserModel[]
}
let initialState: userSliceType = {
    users: []
};

const loadUsers = createAsyncThunk('userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await userService.getAll();
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    })


const userSlice = createSlice({
        name: 'userSlice',
        initialState: initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addMatcher(isFulfilled(loadUsers), (state, action) => {
                    state.users = action.payload
                })
    }
);

const {reducer: userReducer, actions} = userSlice;

const userActions = {...actions, loadUsers};

export {userActions, userReducer}