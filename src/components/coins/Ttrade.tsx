import React from "react";
import styles from "/styles/trade.module.css"

const Ttrade=()=>{ 
return (
  <div className={styles.container}>
  <h1>거래소</h1>
  <div className={styles.secWrapper}>
      <div className={styles.secLeft}>
          <div className={styles.tab}>
              <h4 >자동거래</h4>
              <p>종목시세</p>
              <select style={{height:30, width:"90%"}} >
                  <option >비트코인</option>
                  <option >도지코인</option>
                  <option >샌드박스</option>
              </select>

              <div>
                  <div>
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label ><input type="checkbox" />사용자 설정</label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label><input type="checkbox" />Ai 추천</label><br />
                  <br /><br /><br /><br />
                  </div>
                  <div className={styles.text}>
                  &nbsp;
                      <label > 투자 금액 </label>
                      <input  type='text' />
                  </div>
                  <div className={styles.text}>
                      <label >목표이익률 </label>
                      <input  type='text' />
                  </div>
                  <div className={styles.text}>
                  &nbsp; &nbsp; &nbsp;<label >손해률 </label>
                      <input  type='text' />
                  </div>
                  <br/><br/>
                  <button className={styles.buttons}>자동매매시작</button>
              </div>
          </div>
      </div>
      <div className={styles.secRight}>
      코인종목별 차트
      </div>
  </div>
</div>
)
}
export default Ttrade;