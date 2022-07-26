
import { User } from '@/interface'
import { fetchUsers } from '@/modules/apis/userApi'
import React, { FC, useEffect, useState } from 'react'
import styles from '@/styles/user.module.css'

const UserList: FC = () => {
    const [users, setUsers] = useState<Array<User>>([])
    useEffect(() => {
        fetchUsers()
        .then((res:any) => {
            console.log(res.data)
            setUsers(res.data)
        })
     }, [])
    
    console.log(`setUser` + JSON.stringify(users))
    console.log(typeof users)

  return (
      <div className={styles.container}>
          <h2>User List</h2>
        <div className={styles.userList} >
            <ul className={styles.ul1}>
                <li>이름</li>
                <li>휴대번호</li>
                <li>이메일</li>
            </ul>
             <ul className={styles.ul2} >
               {users.map((user :  User) =>
                   <li className={styles.li} key={user.name}>{user.name}{user.mobile}{user.email}</li>
                   
               )}
            </ul>
        </div>  
    </div>
  )
}

export default UserList