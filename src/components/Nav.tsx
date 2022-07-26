import React, { FC } from 'react'
import Link from 'next/link';
import styles from '@/styles/Nav.module.css'

 const Nav:FC=()=> {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <Link href='/' >
            <p className={styles.logo}>PatternBOT</p></Link>
          </div>
          <div className={styles.menus}>
              <Link className={styles.menu} href='/coins/coins'>현재가</Link>
              <Link className={styles.menu} href='/orders/orders'>주문/손익</Link>
              <Link className={styles.menu} href='/settings/settings'>설정</Link>
              <Link className={styles.menu} href='/menus/about'>About</Link>
              <Link className={styles.menu} href='/menus/contact'>Contact</Link>
              <Link className={styles.menu} href='/menus/faq'>FAQ</Link>

          </div>
        <div className={styles.loginMenu}>
          <div >
            <Link href='/users/login'>
              <a className={styles.login}>로그인</a></Link>
          </div>
          <div >
            <Link href='/users/join' className={styles.register}>
            <a className={styles.register}>회원가입</a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;
