import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";


type UserState = {
    data: User[]
    status: 'idle' | 'loading' | 'failed'
    isLoggined: boolean
    error: any
  }

const initialState: UserState = {
    data: [],
    status: 'idle',
    isLoggined: false,
    error: null,
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        //join
        joinRequest(state: UserState,  action: PayloadAction<User>) {
            state.status = 'loading';
            state.error = null;
        },
        joinSuccess(state: UserState,  action: PayloadAction<User>){
            state.status = 'idle'
            state.data = [...state.data, action.payload]
        },
        joinFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        },
        //login
        loginRequest(state: UserState, action:PayloadAction<User>){
            state.status = 'loading'; 
        },
        loginSuccess(state: UserState, action:PayloadAction<User>){
            state.status = 'idle'
            state.data = state.data.concat(action.payload)
            state.isLoggined = true
            alert(`진행 : 로그인 데이터 ${state.data}`)
        },
        loginFailure(state: UserState, {payload: error}){
            state.status = 'failed'
            state.error = error
        },
      
        // 로그아웃
        logoutRequest(state: UserState) {
            state.status = 'loading';
            state.error = null;
        },
        logoutSuccess(state: UserState ){
            state.status = 'idle'
            window.location.href = '/'
        },
        logoutFailure(state: UserState, action: PayloadAction<{ error: any }>) {
            state.status = 'failed';
            state.error = action.payload;
        },

        // saveToken(state, action) {

        // },
        // deleteToken(state, action) {
            
        // }

                //토큰
        // loadUserRequest(state : UserState, action: PayloadAction){
        //     console.log(`진행: 토큰으로 유저 정보 요청 ${JSON.stringify(action.payload)}`)
        // },
        // loadUserSuccess(state: UserState, action: PayloadAction<User>){
        //     console.log(`진행 : 유저 정보 요청 성공 ${JSON.stringify(action.payload)}`)
        //     state.data = [...state.data, action.payload]
        // },
        // loadUserFailure(state, {payload : error}){
        //     console.log(`진행 : 유저 정보 요청 실패`)
        // },
    }
})
export const {
        joinRequest, joinSuccess, joinFailure,
        loginRequest, loginSuccess, loginFailure,
        logoutRequest, logoutSuccess, logoutFailure
    } = userSlice.actions;

const {reducer, actions} = userSlice
export const userActions = actions
export default reducer;