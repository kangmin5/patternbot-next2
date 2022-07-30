import React, { FC, useEffect, useRef, useState } from 'react'
import styles from '@/styles/Join.module.css'

import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';
import { userActions } from '@/modules/slices/userSlice';

import { User } from '@/modules/types';
import Link from 'next/link';
import { useRouter } from 'next/router';



const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
const MOBILE_REGEX = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/  //숫자만 입력하는 정규식


const Join:FC = () => {
  const dispatch = useDispatch();
  const nameRef = useRef<any|null>()
  const router = useRouter();
  const [user, setUser] = useState<User>({
    name: '',username: '', password: '', email: '', mobile:''
  })
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    nameRef.current.focus();
  }, [])
  


  const onChange = (e: { preventDefault: () => void; target: { name: string;  value:string}}) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({...user,[name]:value})
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      // alert(`1. 진행확인: 회원가입클릭 ${JSON.stringify(user)}`)
    
      // const v1 = USER_REGEX.test(user.username);
      // const v2 = PWD_REGEX.test(user.password);
      // const v3 = EMAIL_REGEX.test(user.email);
      // const v4 = MOBILE_REGEX.test(user.mobile);
      // if (!v1 || !v2 || !v3 || !v4) {
      //     setErrMsg("입력형식이 잘못 되었습니다.");
      //     return;
      // }
    try {
        dispatch(userActions.joinRequest(user));
        setSuccess(true);
        router.push('/users/login')
        } catch (err) {
          console.log(err)

        }
  }

    return (
        <div className={styles.container}>
            <h1>회원가입</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  required
                  placeholder="이름"
                  name="name"
                  onChange={onChange}
                  ref={nameRef}
                />
                <input
                  required
                  placeholder="아이디"
                  name="username"
                  onChange={onChange}
                />
                <input
                  required
                  name="password"
                  placeholder="비밀번호"
                  type="password"
                  onChange={onChange}
                />
                <input
                  required
                  placeholder="이메일"
                  name="email"
                  onChange={onChange}
                />  
                <input
                  required
                  placeholder="휴대번호"
                  name="mobile"
                  onChange={onChange}
                /> 
                
                <button
                  style={{
                    padding: "1rem", marginTop: "1rem", backgroundColor: "dodgerblue",
                    color: "white", fontWeight: "bold", borderColor: "dodgerblue"
                  }}
                    >
                    회원가입
                </button>
              </form>
        
            <div>
            <Link href='/users/login' >
                <h5 style={{ marginTop: "0.5rem",textAlign:"end",color:"#5e5ee6",cursor:"pointer" }}>
						로그인
            </h5>
            </Link>            
            </div>
            <div>
                <h5>계속 진행하면 PatternBOT 서비스 약관 및 개인정보 보호정책에 동의한 것으로 간주됩니다.</h5>
            </div>

        
    </div>
    )
}
export default Join