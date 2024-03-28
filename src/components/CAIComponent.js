import React from "react"
import styles from "../style/caiComponent.module.css"
import caigraphimg from "../img/caiGrapgImg.png"

function CAIComponent() {
  return(
    <div className={styles.totalgroup}>
      <div className={styles.boxtitle}>통합 대기환경 지수(CAI)</div>

      <div className={styles.caibox}>
        {/* 범례그룹 */}
        <div className={styles.legends}>
          <div className={styles.ellipses}>
            <div className={styles.ellipse}/>
            <div className={styles.ellipse1}/>
            <div className={styles.ellipse2}/>
            <div className={styles.ellipse3}/>
          </div>
          <div className={styles.ranges}>
            <div className={styles.verygood}>0~50</div>
            <div className={styles.good}>51~100</div>
            <div className={styles.bad}>101~250</div>
            <div className={styles.verybad}>251~</div>
          </div>
        </div>
  
        {/* 수치 그래프 그룹 */}
        <div className={styles.caiGraph}>
          <div className={styles.overlap}>
            <img className={styles.caigraphimg} src={caigraphimg} alt="caigraphimg"/>
            <div className={styles.value}>631</div>
            <div className={styles.state}>매우나쁨</div>
          </div>
        </div>

      </div>

    </div>
  )

};

export default CAIComponent