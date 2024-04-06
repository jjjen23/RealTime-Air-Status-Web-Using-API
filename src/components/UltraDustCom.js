import React from "react";
import styles from "../style/ultraDust.module.css"

function UltraDust({pm25Value}) {
  let finedustgrade;
  let stateColor;


  if (0 <= pm25Value && pm25Value <= 15) {
    finedustgrade = "좋음";
    stateColor = "#58aad7";
  } else if (15 < pm25Value && pm25Value <= 35) {
    finedustgrade = "보통";
    stateColor = "#8bc347";
  } else if (35 < pm25Value && pm25Value <= 75) {
    finedustgrade = "나쁨";
    stateColor = "#fdc154";
  } else if (75 < pm25Value) {
    finedustgrade = "매우나쁨";
    stateColor = "#ff655b";
  }

  return(
  <div className={styles.box}>
    <div className={styles.title}>초 미세먼지 지수</div>
    <div className={styles.finedust}>
      <div className={styles.overlay}>
        <div className={styles.value} style={{color : stateColor}}>{pm25Value}</div>
        <div className={styles.state} style={{color : stateColor}}>{finedustgrade}</div>
        <div className={styles.group}>
          <div className={styles.ellipse1}/>
          <div className={styles.ellipse2}/>
          <div className={styles.ellipse3}/>
          <div className={styles.ellipse4}/>
          <div className={styles.verygood}>0~15</div>
          <div className={styles.good}>16~35</div>
          <div className={styles.bad}>36~75</div>
          <div className={styles.verybad}>76~</div>
        </div>
      </div>
    </div>
  </div>
  )
};

export default UltraDust;