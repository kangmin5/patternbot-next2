//recharts 라이브러리 필요 ( yarn add recharts)

import Link from "next/link";
import React, {useState} from 'react';
import axios from "axios";
import styles from "@/styles/Coins.module.css"
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import { FC } from "react";


const Coins:FC = () => { 
    const onClick = () => {
        <Link href="/menu/trade/ttrade"/>
    }
    const [data, setData] = useState([])
    const [url, setUrl] = useState('');
    const onChange = (e:any) => {
        setUrl(e.target.value);
    }
    axios.get('https://api.upbit.com/v1/candles/days?market=' + `${url}` + '&count=10&converting').then(res=>{
        setData(res.data)
    }).catch(err=>{}) 
 
    const temp = data.map((coin:any) => (
        { 
            date : coin.candle_date_time_kst,
            price : coin.trade_price 
        }
    ))

    return (
    <div className={styles.container}>
        <h1>거래소</h1>
        <div className={styles.secWrapper}>
            <div className={styles.secLeft}>
                <div className={styles.tab}>
                    <h4 >자동거래</h4>
                    <p>종목시세</p>
                    <select style={{height:30, width:"90%"}}  onChange={onChange}  >
                        <option>코인 선택</option>
                        <option value = "KRW-BTC">비트코인</option>
                        <option value = "KRW-DOGE">도지코인</option>
                        <option value = "KRW-SAND">샌드박스</option>
                    </select>
                    <div className={styles.tr}>
                        <div className={styles.text}><br />로그인이 필요한 서비스 입니다. <br /><br />
                            <button className={styles.buttons} onClick={onClick}>로그인하러가기</button>
                            <br /><br />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.secRight}>
            코인종목별 차트
            <LineChart
            width={500}
            height={500}
            data={temp}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }}/>
            </LineChart>

            </div>
        </div>
    </div>
)
}
export default Coins