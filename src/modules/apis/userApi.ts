import {AxiosError, AxiosResponse} from "axios";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { accessClient, client } from ".";
import { ResultFindPassword, ResultFindUsername, Token, User } from "../types";

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
            await accessClient.post('/users/login', payload)
            const userToken = response.data.token;
            if (userToken === null && AxiosError || userToken.value === 'FAILURE') {
                alert('아이디및 비밀번호 확인하세요.')
            } else {
                localStorage.setItem("userToken", userToken)
                alert('로그인 성공')
            }
            return response.data
        } catch (err) {
            return err
        }
    },
    logout: async () => {
        try {
            if (localStorage.length) {
                localStorage.removeItem("userToken")
            }
            await accessClient.delete('/users/logout',)
        } catch (err) {
            return err;
        }
    },
    findUsername: async (payload:ResultFindUsername) => {
        try {
            const response: AxiosResponse<any,ResultFindUsername> =
            await accessClient.post('/users/findUsername', payload)
            return response.data
        } catch (err) {
            return err;
        }
    },
    findPw: async (payload:ResultFindPassword) => {
        try {
            const response: AxiosResponse<any,ResultFindUsername> =
            await accessClient.post('/users/findPw', payload)
            return response.data
        } catch (err) {
            return err;
        }
    },
    loggedUser: async (payload: Token) => {
        try {
            const response: AxiosResponse =
            await accessClient.post('/users/token', payload)
            return response.data
        } catch (err) {
            return err;
        }
    },
    removeUser: async (payload: User) => {
        try {
            const response =
            await accessClient.delete('/users/delete')
            window.location.href =("/")
        } catch (err) {
            return err;
        }
    }
    
}