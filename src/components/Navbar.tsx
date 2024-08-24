import React from "react";
import styles from "./Navbar.module.css";
import NavTile from "./NavTile";
import logo from "../assets/images/logo.png";
import Dropdown from "./Dropdown";
import portfolioIcon from "../assets/icons/portfolio.svg";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbarContainer}>
      <Link to="/" className={styles.no_underline}>
        <span>
          <img src={logo} alt="Jesus Azpitarte Logo" id={styles.logo}></img>
          Jesus Azpitarte
        </span>
      </Link>

      <span>
        <NavTile mode="home" />
        <NavTile mode="aboutme" />

        <Dropdown text="Portfolios" icon={portfolioIcon}>
          <NavTile mode="webdev" />
          <NavTile mode="uxui" />
          <NavTile mode="art" />
        </Dropdown>
      </span>
    </nav>
  );
};

export default Navbar;
