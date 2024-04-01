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
      <div className={styles.div}>

      {/* 전체 요소 : 크개 3개의 열 묶음으로 이동하게 구성 */}
      <div style={{display:"flex", flexDirection:"row"}}>
              {/* 왼쪽 한 묶음 : 네비바 */}
              <div className={styles.navbar}>
                  <div className={styles.logodiv}><img src={logoicon} alt="logoimg"/></div>
                  <div className={styles.bottomgroup}>
                    <div className={styles.favdiv}> <img src={favicon} alt="favicon"/></div>
                    <div className={styles.homediv}><img src={homeicon} alt="homeicon"/></div>
                  </div>
              </div>

              {/* 중앙 한 묶음 */}
              <div style={{display:"flex", flexDirection:"column"}}>
                <div className={styles.titlegroup}>
                  <p className={styles.titlelocation}>서울 성동구</p>
                  <div className={styles.titlefavimgdiv}><img className={styles.titlefavimg} src={favicon} alt="titlefavicon"/></div>
                </div>

                <div div style={{display:"flex", flexDirection:"row"}}>
                  <div><SelectCom></SelectCom></div>
                  <div style={{marginLeft:"63px"}}><SelectCom></SelectCom></div>
                </div>
                <div style={{marginLeft: "0px"}}><CAIComponent></CAIComponent></div>
                <div style={{display:"flex", flexDirection:"row"}}>
                      <div style={{marginTop:"0px", marginLeft:"0px"}}><FineDustcom></FineDustcom></div>
                      <div style={{marginTop:"0px", marginLeft:"22px"}}><UltraDust></UltraDust></div>
                </div>
              </div>

              {/* 오른쪽 한 묶음 */}
              <div style={{display:"flex", flexDirection:"column"}}>
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