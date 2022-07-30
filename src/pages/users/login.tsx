import React, { ChangeEvent, FormEvent, useState } from 'react'
import Login from '@/components/users/Login'
// import { useAppDispatch } from '@/hooks'
import { loginRequest } from '@/modules/slices/userSlice'
import { NextPage } from 'next'
import { useDispatch } from 'react-redux'

  
const LoginPage: NextPage = () => {
  const [login, setLogin] = useState({ email: '', password: '' })
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
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
      <Login handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  )
}
export default LoginPage