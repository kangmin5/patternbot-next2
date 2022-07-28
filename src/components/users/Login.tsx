import React, { FC, FormEvent, useRef } from 'react'
import styles from '@/styles/Login.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from 'next/link';

type Props = {
  onChange : (e : FormEvent<HTMLInputElement> ) => void;
  onSubmit : (e : FormEvent<HTMLFormElement>) => void;
}

const Login: FC<Props> = ({onSubmit,onChange}:Props) => {

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  return (
    <div className={styles.container}>
            <h1 > 로그인</h1>
        <form onSubmit={onSubmit} className={styles.form}>
            <input

              required

              id=""
              placeholder="이메일"
              name="email"
              autoComplete="off"
              ref={emailRef}
              onChange={onChange}
            />
            <input

              required

              name="password"
              placeholder="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              ref={passwordRef}
              onChange={onChange}
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
                <h5>계속 진행하면 patternBot의 서비스 약관 및 개인정보 보호정책에 동의한 것으로 간주됩니다.</h5>
        </div>

        
    </div>
  )
}
export default Login