import React, { useState } from "react";
import styles from "../style/selectCom.module.scss"
import dropdownicon from "../img/dropdownicon.png"

function SelectCom({firstSelectList}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return(
    <div className={styles.selection1}>
      <div className={styles.selection1Text}>선택1 dropdown</div>
      <div className={styles.dropdownWrapper1}>
        <div className={styles.printitem}>{selectedItem}</div>
        <div className={styles.iconwrap} onClick={toggleDropdown}>
          <img alt="dropdown1" src={dropdownicon} />
        </div>
      </div>
      {isOpen && (
        <div className={styles.list}>
          {firstSelectList.map((item, index)=>(
            <div className={styles.select} key={index}  onClick={() =>handleItemClick(item)}>{item}</div>
          ))}
        </div>
      )}
  </div>
  )
};

export default SelectCom;