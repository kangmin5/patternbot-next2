import React, { FC } from 'react'
import styles from '@/styles/Footer.module.css'
import Link from 'next/link'

 const Footer:FC=()=> {
  return (
    <div className={styles.container}>
      <div className={styles.foot}>
        <p>PatternBOT  2022 BitCamp Team Project</p>
      </div>
      
    
    </div>
  )
}
export default Footer