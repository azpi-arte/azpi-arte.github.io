import React from "react";
// import Sidebar from "./Sidebar";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout: React.FC = () => {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <div className={styles.bigView}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
