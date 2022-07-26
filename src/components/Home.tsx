import React, { FC } from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'


 const Home:FC=()=> {
  return (
    <div className={styles.container}>
      <div className={styles.backimage}>
        <div className={styles.maintext}>
          <h1>COIN 인공지능 <em>자동매매</em> </h1>
        </div>
      </div>
      <div className={styles.mainbox}>
        <div className={styles.wrapper}>
          <div className={styles.box1}>클릭 [about]소개로 가기</div>
          <div className={styles.box2}>클릭 [거래소] 바로가기</div>
          <div className={styles.box3}> COIN 시세 보여주기</div>
        </div>
      </div>
    </div>
  )
}
export default Home;