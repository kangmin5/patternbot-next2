import React, { FC, useState } from 'react'
import styles from '@/styles/Join.module.css'
import Link from 'next/link'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useDispatch } from 'react-redux';
import { userActions } from '@/modules/users/userSlice';
import { useRouter } from 'next/router';
import { User } from '@/interface';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
const MOBILE_REGEX = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/  //숫자만 입력하는 정규식


const Join:FC = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const [user, setUser] = useState<User>({
    name: '',username: '', password: '', email: '', mobile:''
  })
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false);



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
          <form onSubmit={handleSubmit}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="이름"
                  name="name"
                  autoComplete="name"
                  onChange={onChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="아이디"
                  name="username"
                  autoComplete="username"
                  onChange={onChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  autoComplete="current-password"
                  onChange={onChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id=""
                  label="이메일"
                  name="email"
                  autoComplete="email"
                  onChange={onChange}
                />  
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id=""
                  label="휴대번호"
                  name="mobile"
                  autoComplete="mobile"
                  onChange={onChange}
                /> 
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 1 }}
                  >
                    회원가입
                  </Button>
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