import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  const navigator = useNavigate();
  return (
    <button
      className={styles.buttonContainer}
      onClick={() => {
        navigator(link);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
