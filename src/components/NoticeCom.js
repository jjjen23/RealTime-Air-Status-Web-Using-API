import React from "react";
import styles from "../style/noticeCom.module.css"

function NoticeCom() {
  return(
    <div className={styles.topbox}>
      <div className={styles.noticebox}>
        <div className={styles.title}>행동요령</div>
        <div className={styles.overlap}>
          <p className={styles.text}>
            모든 사람들이 외출을 삼가고 <br />
            실내에서 휴식을 취해야 해요.
          </p>
        </div>
      </div>
    </div>
  )
};

export default NoticeCom;