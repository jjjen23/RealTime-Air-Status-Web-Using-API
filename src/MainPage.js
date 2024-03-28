import React from "react";
import styles from "./style/mainPage.module.css"
import logoicon from "./img/logoicon.png"
import homeicon from "./img/homeicon.png"
import favicon from "./img/favicon.png"
import dropdownicon from "./img/dropdownicon.png"
import CAIComponent from "./components/CAIComponent";


function MainPage() {
  return(
    <div className={styles.desktop}>
      <div className={styles.div}>
        <div className={styles.navbar}>
            <div className={styles.topdiv}><img className={styles.logoicon} src={logoicon} alt="logoimg"/></div>
            <div className={styles.bottomdiv}>
            <div className={styles.bottomdiv1}> <img className={styles.favicon} src={favicon} alt="favicon"/></div>
              <div className={styles.bottomdiv2}><img className={styles.homeicon} src={homeicon} alt="homeicon"/></div>
            </div>
        </div>

        <div className={styles.titlegroup}>
          <p className={styles.titlelocation}>서울 성동구</p>
          <div className={styles.titlefavimgdiv}><img className={styles.titlefavimg} src={favicon} alt="titlefavicon"/></div>
        </div>
        <p className={styles.currentTime}>2024년 03월 25일 12:00 시 기준</p>
      
        <div className={styles.selection1}>
          <div className={styles.selection1Text}>선택1 dropdown</div>
          <div className={styles.dropdownWrapper1}>
            <img className={styles.dropdown1} alt="dropdown1" src={dropdownicon} />
          </div>
        </div>

        <div className={styles.selection2}>
          <div className={styles.selection2Text}>선택1 dropdown</div>
          <div className={styles.dropdownWrapper2}>
            <img className={styles.dropdown2} alt="dropdown2" src={dropdownicon} />
          </div>
        </div>
        
        <div style={{marginTop:"330px", marginLeft: "200px"}}><CAIComponent></CAIComponent></div>

      </div>
      
    </div>
  )
};

export default MainPage