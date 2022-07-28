import React, { FormEvent, useState } from 'react'
import Login from '@/components/users/Login'
import { NextPage } from 'next'
import { useAppDispatch } from '@/hooks'
import { loginRequest } from '@/modules/users/userSlice'

  
const LoginPage: NextPage = () => {
  const [login, setLogin] = useState({ email: '', password: '' })
  const dispatch = useAppDispatch();

  const handleChange = (e: FormEvent<HTMLInputElement> ) => {
    e.preventDefault();
    const { name, value } = e.currentTarget
    setLogin({...login,[name]:value})
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('>>>>')
    dispatch(loginRequest(login))
  }
  return (
    <div>
      <Login onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  )
}
export default LoginPage