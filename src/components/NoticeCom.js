import React from "react";
import styles from "../style/noticeCom.module.css"

function NoticeCom({khaiGrade}) {
  let stn1 ;
  let stn2 ;

  if (khaiGrade === "1"){
    stn1 = "대기오염 관련 질환자군도" 
    stn2 = "영향을 받지 않음"
  } else if(khaiGrade === "2"){
    stn1 = "환자군에게 만성노출 시"
    stn2 = "경미한 영향을 줄 수 있음"
  } else if(khaiGrade === "3"){
    stn1 = "환자군 및 민감군에게 유해한 영향 유발," 
    stn2 ="일반인도 건강상의 불쾌감 유발가능"
  } else if(khaiGrade === "4"){
    stn1 = "환자군 및 민감군에게 응급조치가 발생," 
    stn2 = "일반인도 유해한 영향을 받을 수 있음"
  }  


  return(
    <div className={styles.topbox}>
      <div className={styles.noticebox}>
        <div className={styles.title}>행동요령</div>
        <div className={styles.overlap}>
          <p className={styles.text}>
            {stn1}<br/>{stn2}
          </p>
        </div>
      </div>
    </div>
  )
};

export default NoticeCom;