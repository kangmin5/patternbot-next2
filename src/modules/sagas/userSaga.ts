
import { AxiosResponse } from 'axios';
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { userApi } from '../apis/userApi';
import { loginFailure, loginSuccess, logoutFailure, logoutRequest, logoutSuccess, userActions } from '../slices/userSlice';
import { User } from '../types';

export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, (action: { payload: User }) => {
        try{
            const response: any = userApi.join(action.payload)
            put(userActions.loginSuccess(response))
            // window.location.href = '/login';
        }catch(error){
            alert('진행 3: saga내부 join 실패  ') 
            put(userActions.loginFailure(error))
        }
    })
}
export function* watchLogin(){
    yield takeLatest(userActions.loginRequest, (action: { payload: User }) => {
        const { loginSuccess, loginFailure } = userActions;
        try {
            const response:any = userApi.login(action.payload)
            put(loginSuccess(response.payload))
            // window.location.href = '/';
        } catch (err) {
            put(loginFailure(err))
        }
    })
}
export function* watchLogOut(){
    yield takeLatest(logoutRequest, () => {
        try{
            const response = userApi.logout()
            delay(1000)
            put(logoutSuccess())
            console.log(`로그아웃 성공`)
        }catch(error){
            put(logoutFailure)
            console.log('로그아웃 실패')
        }
    })
}