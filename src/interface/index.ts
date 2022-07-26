export interface User{
    username:string , password:string, email:string, name:string,mobile:string
}

export interface UserType{
    name: string,
    username: string,
    password: string,
    email: string,
    mobile: string,
} 
export interface UserState {
    data: User[],
    status: 'idle' | 'loading' | 'succeeded' |'failed'
}
