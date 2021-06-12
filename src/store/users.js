import { createSlice } from '@reduxjs/toolkit'
import './actions/users';

const initialState ={
    users: [],
    totalUsers: 0,
}

const usersSlice = createSlice({
    name:"users",
    initialState:initialState,
    reducers:{
        loadUsers :(state, actions)=>{
            
            state.users =[...state.users, ...actions.payload]
        }
    }
})


export default usersSlice.reducer;
export const userActions = usersSlice.actions;