import { Logout } from '@/components/users/Logout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { FormEvent } from 'react'

const LogoutPage:NextPage = () => {
    const router = useRouter()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // localStorage.removeItem("loginWithToken");
        router.push("/users/login")
    }
    return (
        <div>
            <p>이것도 테스트</p>
            <Logout props={handleSubmit} />
        </div>
  )
}

export default LogoutPage