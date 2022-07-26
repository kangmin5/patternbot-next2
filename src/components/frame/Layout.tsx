import React, { FC, ReactNode } from 'react'
import styles from '@/styles/Layout.module.css'

type LayoutProps = {
  children: ReactNode
}
const Layout = ({ children }:LayoutProps) => {
   
  return (
    <div className={styles.container}>
      <main>{children }</main>
    </div>
  )
}
export default Layout;