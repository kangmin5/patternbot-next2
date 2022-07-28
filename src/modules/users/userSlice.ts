import { UserState } from "@/interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
    data: [],
    status: 'idle' 
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state: UserState, _payload) {
            alert(`진행 2 : 회원가입 데이터 ${state.data}`)
            state.status = 'loading';
        },
        joinSuccess(state: UserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
        },
        joinFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        },
        loginRequest(state: UserState, _payload){
            state.status = 'loading'; 
            
        },
        loginSuccess(state: UserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 2 : 회원가입 데이터 ${state.data}`)
        },
        loginFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        },
        // fetchUsersRequest(state: UserState) {
        //     console.log(`진행 2 : fetchUsersRequest  ${JSON.stringify(state)} `)
        //     state.status = 'loading';
        // },
        // fetchUsersSuccess(state: UserState, { payload }) {
        //     console.log(`진행 2 : fetchUsersSuccess ${JSON.stringify(state)} `)
        //     state.status = 'idle'
        //     state.data = [...state.data, payload]
        //     console.log(`서버 payload: ${JSON.stringify(state.data)}`)
        // },
        // fetchUsersFailure(state: UserState, { payload }) {
        //     console.log(`진행 2 : fetchUsersFailure ${JSON.stringify(state)} `)
        //     state.status = 'failed'
        //     state.data = payload
        // }
    }
})
export const { joinRequest, joinSuccess, joinFailure,
                loginRequest, loginSuccess, loginFailure,
                // fetchUsersRequest,fetchUsersSuccess,fetchUsersFailure
            } = userSlice.actions;

const {reducer, actions} = userSlice
export const userActions = actions
export default reducer;