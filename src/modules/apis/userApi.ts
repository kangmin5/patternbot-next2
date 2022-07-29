import {AxiosError, AxiosResponse} from "axios";
import { accessClient, client } from ".";
import { User } from "../types";

export const userApi = {
    join: async (payload: User) => {
        try {
            const response: any =
            await accessClient.post('/users/join', payload)
            return response.data
        } catch (err) {
            return err
        }
    },
    login: async (payload: User) => {
        try {
            const response: AxiosResponse<any, User> =
            await accessClient.post('/user/login', payload)
            const loginWithToken = response.data.token;
            if (loginWithToken === null && AxiosError || loginWithToken.value === 'FAILURE') {
                alert('아이디및 비밀번호 확인하세요.')
            } else {
                localStorage.setItem("loginWithToken", loginWithToken)
                alert('로그인 성공')
            }
            return response.data
        } catch (err) {
            return err
        }
    },
    logout: async () => {
        try {
            await client.post('/users/logout')
        } catch (err) {
            return err;
        }
    },
    userInfo: async () => {
        try{
            const response : AxiosResponse = await client.get(`/users/join`)
            return response.data
        } catch(err) {
            console.log(err)
            return err}
    }
}