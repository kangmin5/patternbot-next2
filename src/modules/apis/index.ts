import axios from "axios";

const SERVER = process.env.NEXT_PUBLIC_SERVER
// 인증 필요없는 axios 
export const client = axios.create({
    baseURL: SERVER,
    headers: {
        "Content-Type" : "application/json"
    }
})
// 인증 axios
export const accessClient = axios.create({
    baseURL: SERVER,
    headers: {
        "Content-Type" : "application/json",
        Authorization: "JWT fefege...",
    }
})

export * from './userApi';


