import React, { useState } from 'react'
import styles from '@/styles/Orders.module.css'
import OrdersTable from './OrdersTable'
import ProfitTable from './ProfitTable'
import BalanceTable from './BalanceTable'

const Orders = () => {
  const [switchOn ,switchChange] = useState(false);
  const [switchOn2 ,switchChange2] = useState(false);

  function switchState() {
    switchChange(!switchOn);
    switchChange2(false)
  }
  function switchState2() {
    switchChange2(!switchOn2);
    switchChange(false)
  }

  return (
    <div className={styles.container}>
      <h1>자동매매</h1>
      <div>
        <OrdersTable/>
      </div>
      <div>
        <button className={styles.button1} onClick={switchState} >수익분석</button>
        <button className={styles.button1} onClick={switchState2}>주문현황</button>
      </div>
      <div>
        {switchOn === true ? <ProfitTable /> : null}
        {switchOn2 === true ? <BalanceTable /> : null}
        
      </div>
    </div>
  )
}

export default Orders