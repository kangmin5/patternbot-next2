import React, { ChangeEvent, FC, FormEvent, useEffect, useRef } from 'react'
import styles from '@/styles/Login.module.css'
import Button from '@mui/material/Button';
import Link from 'next/link';


interface LoginProps {
  handleChange : (e : ChangeEvent<HTMLInputElement> ) => void;
  handleSubmit : (e : FormEvent<HTMLFormElement>) => void;
}

const Login:FC<LoginProps> = ({handleSubmit,handleChange}:LoginProps) => {

  const usernameRef = useRef<any|null>()
  useEffect(() => {
    usernameRef.current.focus()
  },[])

  return (
    <div className={styles.container}>
            <h1 > 로그인</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="사용자ID"
              name="username"
              ref={usernameRef}
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
            <button
          style={{
            padding: "1rem", marginTop: "1rem", backgroundColor: "dodgerblue",
            color: "white", fontWeight: "bold", borderColor: "dodgerblue"
          }}
            >
              로그인
            </button>
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

