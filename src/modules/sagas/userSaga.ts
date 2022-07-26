import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios';
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { fetchUsers, userJoinApi, userLoginApi } from '../apis/userApi';
import { userActions } from '../users/userSlice';

interface UserJoinType{
    type: string;
    payload: {
        name:string,username:string, password:string, email:string, mobile:string
    }
}
interface UserJoinSuccessType{
    type: string;
    payload: {
        name:string,username:string, password:string, email:string,  mobile:string
    }
}
interface UserLoginType{
    type: string;
    payload: {
        email:string, password:string
    }
}
interface UserLoginSuccessType{
    type: string;
    payload: {
        email:string,  password:string
    }
}

function* join(user: UserJoinType){
    try {
        console.log('3 saga내부 join 성공  ' + JSON.stringify(user))
        alert('3 saga내부 join 성공  '+ JSON.stringify(user))
        const response: UserJoinSuccessType = yield userJoinApi(user.payload)
        yield put(userActions.joinSuccess(response))
    }catch(error){
         console.log('3 saga내부 join 실패  ') 
         yield put(userActions.joinFailure(error))
    }
}
function* login(login: UserLoginType){
    try{
        alert(' 진행 3: saga내부 성공  '+ JSON.stringify(login))
        const response: UserLoginSuccessType = yield userLoginApi(login.payload)
        yield put(userActions.loginSuccess(response))
    }catch(error){
         alert('진행 3: saga내부 join 실패  ') 
         yield put(userActions.loginFailure(error))
    }
}

export function* fetchUsersSaga(){
    const { fetchUsersSuccess, fetchUsersFailure } = userActions
        try {
            const res:AxiosResponse = yield call(fetchUsers)
            console.log(`fetchUsersSaga : ${JSON.stringify(res.data)}`) 
            yield put(fetchUsersSuccess(res.data))
        } catch (error) {
            yield put(fetchUsersFailure(error))
        }
}



export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, join)
}
export function* watchLogin(){
    yield takeLatest(userActions.loginRequest, login)
}
export function* watchFetchUser(){
    yield takeLatest(userActions.fetchUsersRequest, fetchUsersSaga)
}