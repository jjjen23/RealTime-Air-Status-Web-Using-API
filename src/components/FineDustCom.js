import React from "react";
import styles from "../style/fineDustCom.module.css"

function FineDustCom() {
  return(
    <div className={styles.box}>
      <div className={styles.title}>미세먼지 지수</div>
      <div className={styles.finedust}>
        <div className={styles.overlay}>
          <div className={styles.value}>95</div>
          <div className={styles.state}>보통</div>
          <div className={styles.group}>
            <div className={styles.ellipse1}/>
            <div className={styles.ellipse2}/>
            <div className={styles.ellipse3}/>
            <div className={styles.ellipse4}/>
            <div className={styles.verygood}>0~30</div>
            <div className={styles.good}>31~80</div>
            <div className={styles.bad}>81~150</div>
            <div className={styles.verybad}>150 ~</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default FineDustCom;