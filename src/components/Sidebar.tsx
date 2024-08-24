import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import NavTile from "./NavTile";
import x from "../assets/icons/x-icon.svg";
import hamburger from "../assets/icons/hamburger.svg";

const Sidebar = () => {
  // closes the sidebar and hides everything inside.
  const [sidebarState, toggleSidebar] = useState(true);

  return (
    <div className={styles.sidebarAndToggleButton}>
      {/* sidebar */}
      <div
        className={`${styles.sidebar} ${sidebarState ? "" : styles.inactive}`}
      >
        <div>
          {/* close button */}
          <button
            className={styles.sidebarButton}
            onClick={() => toggleSidebar(false)}
          >
            <img src={x} alt="close sidebar 'x' icon" />
          </button>
        </div>

        <div>
          <NavTile mode="home" />
          <NavTile mode="aboutme" />
          <hr />
          <h3> Portfolios: </h3>
          <NavTile mode="art" />
          <NavTile mode="uxui" />
          <NavTile mode="webdev" />
        </div>
      </div>

      {/* Open Button */}
      <button
        onClick={() => toggleSidebar(true)}
        className={`${sidebarState ? styles.inactive : ""}`}
      >
        <img src={hamburger} alt="open sidebar button" />
      </button>
    </div>
  );
};

export default Sidebar;
