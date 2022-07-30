export interface User {
    userid?: number,
    name?: string,
    username?: string,    
    password?: string,
    email?: string,
    mobile?: string,
    token?: string | null
    islogged? :false
}
export interface ResultFindUsername { // api data
    username : string
}
export interface ResultFindPassword { // api data
    password : string
}
export interface Token {
    token: string | null
}