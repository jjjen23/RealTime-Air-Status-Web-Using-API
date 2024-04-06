import React from "react"
import styles from "../style/caiComponent.module.css"
import { PieChart } from "react-minimal-pie-chart";

function CAIComponent({khaiValue}) {
  let grade;
  let stateColor;

  let percentage;
  const totalcai = 500;

  // khaiValue 퍼센트로 계산하기
  percentage = (khaiValue / totalcai) * 100

  //console.log(percentage)

  if (0 <= khaiValue && khaiValue <= 50) {
    grade = "좋음";
    stateColor = "#58aad7";
  } else if (50 < khaiValue && khaiValue <= 100) {
    grade = "보통";
    stateColor = "#8bc347";
  } else if (100 < khaiValue && khaiValue <= 250) {
    grade = "나쁨";
    stateColor = "#fdc154";
  } else if (250 < khaiValue) {
    grade = "매우나쁨";
    stateColor = "#ff655b";
  }


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
            <div className={styles.verybad}>251~500</div>
          </div>
        </div>

      {/* new !!! .. 수치 그래프 그룹 */}  
      <div className={styles.graph}>
        <PieChart
            data = {[
              {
                value: khaiValue,
                color : stateColor,
                name : "name1",
              },
            ]}
            reveal={percentage} 
            lineWidth={13}
            background="lightgray"
            lengthAngle={360}
            rounded
            animate
            label={({dataEntry}) =>(
              <React.Fragment>
                <text x="50%" y="30%" textAnchor="middle" dominantBaseline="middle" fontSize="10px" fontFamily="SCDream5" fill={stateColor}>
                  {grade}
                </text>
                <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" fontSize="30px" fontFamily="SUITE-ExtraBold" fill={stateColor}>
                  {dataEntry.value}
                </text>
              </React.Fragment>
            )}
            // labelStyle={{
            //   fontSize: "30px",
            //   fill: "#ff655b",
            //   fontFamily : "SUITE-ExtraBold",
            // }}
            // labelPosition={0}
        
          />
      </div>

      </div>

    </div>
  )

};

export default CAIComponent