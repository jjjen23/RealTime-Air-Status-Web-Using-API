import React from "react";
import styles from "../style/mapCom.module.css"

function MapCom() {
  return(
    <div className={styles.topbox}>
      <div className={styles.mapbox}>
        <div className={styles.title}>국내 대기오염 현황</div>
        <div className={styles.map}></div>
      </div>
    </div>
  )
};

export default MapCom;