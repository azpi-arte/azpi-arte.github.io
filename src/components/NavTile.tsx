import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./NavTile.module.css";

import homeIcon from "../assets/icons/home.svg";
import aboutmeIcon from "../assets/icons/aboutme.svg";
import artIcon from "../assets/icons/art.svg";
import uxuiIcon from "../assets/icons/uxui.svg";
import webdevIcon from "../assets/icons/webdev.svg";

// Define a type for the configuration object
interface ModeConfig {
  icon: string;
  text: string;
  link: string;
}

// Define a type for the possible modes
type Mode = "home" | "aboutme" | "art" | "uxui" | "webdev" | "custom";

// Define the modeConfig object with the ModeConfig type
const modeConfig: Record<Mode, ModeConfig> = {
  home: { icon: homeIcon, text: "Home", link: "/" },
  aboutme: { icon: aboutmeIcon, text: "About Me", link: "/aboutme" },
  art: { icon: artIcon, text: "Art", link: "/art" },
  uxui: { icon: uxuiIcon, text: "UX/UI", link: "/uxui" },
  webdev: { icon: webdevIcon, text: "Web Development", link: "/webdev" },
  custom: { icon: "", text: "", link: "" },
};

interface NavTileProps {
  mode: Mode; // Specify the mode as one of the valid types
  icon?: string;
  text?: string;
  link?: string;
}

const NavTile = ({ mode }: NavTileProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === modeConfig[mode].link;

  return (
    <div
      className={`${styles.navTileContainer} ${isActive ? styles.active : ""}`}
      onClick={() => navigate(modeConfig[mode].link)}
    >
      <img src={modeConfig[mode].icon} alt={modeConfig[mode].text} />
      <span>{modeConfig[mode].text}</span>
    </div>
  );
};

export default NavTile;
