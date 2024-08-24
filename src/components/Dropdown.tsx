import React, { ReactNode } from "react";
import styles from "./Dropdown.module.css";
import caret from "../assets/icons/caret-down.svg";

interface DropdownProps {
  text: string;
  icon: string;
  children?: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children, text, icon }) => {
  return (
    <div className={styles.dropdown}>
      <span className={styles.dropdownButton}>
        <img src={icon} alt="" />
        {text}
        <img src={caret} alt="dropdown caret"></img>
      </span>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Dropdown;
