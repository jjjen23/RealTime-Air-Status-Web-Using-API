import React from "react";
import styles from "./style/mainPage.module.css"
import logoicon from "./img/logoicon.png"
import homeicon from "./img/homeicon.png"
import favicon from "./img/favicon.png"
import CAIComponent from "./components/CAIComponent";
import FineDustcom from "./components/FineDustcom" ;
import UltraDust from "./components/UltraDustCom";
import NoticeCom from "./components/NoticeCom";
import MapCom from "./components/MapCom";
import SelectCom from "./components/SelectCom";



function MainPage() {
  return(
    <div className={styles.desktop}>
      {/* 전체 요소 : 크개 3개의 열 묶음으로 이동하게 구성 */}


      {/* <div style={{ marginTop: '50px', marginLeft: '50px' }}>
        <div style={{ width: '260px', height: '260px' }}>
          <svg viewBox="0 0 260 260">
            <circle cx="130" cy="130" r="120" fill="none" stroke="#515151" strokeWidth="16" />
            <circle
              cx="130"
              cy="130"
              r="120"
              fill="none"
              stroke="#ff655b"
              strokeWidth="16"
              // 75퍼센트로 계산된 비율임
              strokeDasharray={2 * Math.PI * 130 * 0.75}
            />
          </svg>
        </div>
    </div> */}



      <div className={styles.div}>
              {/* 왼쪽 한 묶음 : 네비바 */}
              <div>
                <div className={styles.navbar}>
                    <div className={styles.logodiv}><img src={logoicon} alt="logoimg"/></div>
                    <div className={styles.bottomgroup}>
                      <div className={styles.favdiv}> <img src={favicon} alt="favicon"/></div>
                      <div className={styles.homediv}><img src={homeicon} alt="homeicon"/></div>
                    </div>
                </div>
              </div>

              {/* 중앙 한 묶음 */}
              <div>
                <div style={{display:"flex", flexDirection:"column", gap:"40px"}}>
                    <div className={styles.titlegroup}>
                      <p className={styles.titlelocation}>서울 성동구</p>
                      <div className={styles.titlefavimgdiv}><img className={styles.titlefavimg} src={favicon} alt="titlefavicon"/></div>
                    </div>
  
                  <div style={{display:"flex", flexDirection:"row", gap:"20px"}}>
                    <div><SelectCom></SelectCom></div>
                    <div><SelectCom></SelectCom></div>
                  </div>

                  <div style={{display:"flex", marginLeft: "0px"}}><CAIComponent></CAIComponent></div>

                  <div style={{display:"flex", flexDirection:"row", gap:"20px"}}>
                        <div style={{marginTop:"0px", marginLeft:"0px"}}><FineDustcom></FineDustcom></div>
                        <div style={{marginTop:"0px", marginLeft:"0px"}}><UltraDust></UltraDust></div>
                  </div>
                </div>
              </div>

              {/* 오른쪽 한 묶음 */}
              <div>
                <div style={{display:"flex", flexDirection:"column" ,gap:"40px"}}>
                  <div className={styles.currentTime}><p>2024년 03월 25일 12:00 시 기준</p></div>
                  <div style={{marginTop:"0px", marginLeft:"0px"}}><NoticeCom></NoticeCom></div>
                  <div style={{marginTop:"0px", marginLeft:"0px"}}><MapCom></MapCom></div>
                </div>
              </div>
      </div>
      
    </div>
  )
};

export default MainPage