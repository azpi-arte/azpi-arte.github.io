import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return <button className={styles.buttonContainer}> {text} </button>;
};

export default Button;
