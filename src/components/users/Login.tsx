import React, { ChangeEvent, FC, FormEvent, useEffect, useRef } from 'react'
import styles from '@/styles/Login.module.css'
import Button from '@mui/material/Button';
import Link from 'next/link';


interface LoginProps {
  handleChange : (e : ChangeEvent<HTMLInputElement> ) => void;
  handleSubmit : (e : FormEvent<HTMLFormElement>) => void;
}

const Login:FC<LoginProps> = ({handleSubmit,handleChange}:LoginProps) => {

  const emailRef = useRef<any|null>()
  useEffect(() => {
    emailRef.current.focus()
  },[])

  return (
    <div className={styles.container}>
            <h1 > 로그인</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="이메일"
              name="email"
              ref={emailRef}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={handleChange}
              required
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 ,p:2}}
            >
              로그인
            </Button>
        </form>

        <div>
              <Link href='/users/join' >
                  <h5 style={{ marginTop: "0.5rem",textAlign:"end",color:"#5e5ee6",cursor:"pointer" }}>
                  회원가입
              </h5>
              </Link>
        </div>
        <div>
                <h5> patternBot의 서비스 약관 및 개인정보 보호정책에 동의합니다.</h5>
        </div>

        
    </div>
  )
}
export default Login

function initialValue<T>(initialValue: any, arg1: number) {
    throw new Error('Function not implemented.');
  }
