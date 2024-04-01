import React from "react";
import styles from "../style/selectCom.module.scss"
import dropdownicon from "../img/dropdownicon.png"

function SelectCom() {
  return(
    <div className={styles.selection2}>
      <div className={styles.selection2Text}>선택1 dropdown</div>
      <div className={styles.dropdownWrapper2}>
      <div className={styles.iconwrap}>
        <img alt="dropdown2" src={dropdownicon} />
      </div>
    </div>
  </div>
  )
};

export default SelectCom;