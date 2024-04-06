import React from "react";
import styles from "../style/fineDustCom.module.css"

function FineDustCom({pm10Value}) {
  let dustgrade;
  let stateColor;

  if (0 <= pm10Value && pm10Value <= 30) {
    dustgrade = "좋음";
    stateColor = "#58aad7";
  } else if (30 < pm10Value && pm10Value <= 80) {
    dustgrade = "보통";
    stateColor = "#8bc347";
  } else if (80 < pm10Value && pm10Value <= 150) {
    dustgrade = "나쁨";
    stateColor = "#fdc154";
  } else if (150 < pm10Value) {
    dustgrade = "매우나쁨";
    stateColor = "#ff655b";
  }


  return(
    <div className={styles.box}>
      <div className={styles.title}>미세먼지 지수</div>
      <div className={styles.finedust}>
        <div className={styles.overlay}>
          <div className={styles.value} style={{color : stateColor}}>{pm10Value}</div>
          <div className={styles.state} style={{color : stateColor}}>{dustgrade}</div>
          <div className={styles.group}>
            <div className={styles.ellipse1}/>
            <div className={styles.ellipse2}/>
            <div className={styles.ellipse3}/>
            <div className={styles.ellipse4}/>
            <div className={styles.verygood}>0~30</div>
            <div className={styles.good}>31~80</div>
            <div className={styles.bad}>81~150</div>
            <div className={styles.verybad}>151~</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default FineDustCom;