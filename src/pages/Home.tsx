import React from "react";
import styles from "./Home.module.css";
import Button from "../components/Button";
import NavTile from "../components/NavTile";
import github from "../assets/icons/github.svg";
import handshake from "../assets/icons/handshake.svg";
import linkedin from "..//assets/icons/linkedin.svg";
import img1 from "../assets/images/home/todo.png";
import img2 from "../assets/images/home/instone.jpg";
import img3 from "../assets/images/home/dragon.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();
  return (
    <div className={styles.homepageContainer}>
      <section className={styles.hero}>
        <div className={styles.heroDescription}>
          <span id={styles.hey}> Hey, I'm </span>
          <span> Jesus Azpitarte </span>
          <p>
            An aspiring detail-oriented <strong> Web Developer </strong> and
            <strong> Passionate Artist </strong> , dedicated to crafting
            visually appealing and user friendly experiences.
          </p>
          <br />
          <span>
            <Button link="/aboutme" text="About Me" />
            <a
              href="https://github.com/azpi-arte"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="Jesus' github page link" />
            </a>
            <a
              href="https://app.joinhandshake.com/profiles/40744682"
              target="_blank"
              rel="noreferrer"
            >
              <img src={handshake} alt="handshake link" />
            </a>
            <a
              href="https://www.linkedin.com/in/jesus-azpitarte-b3707b2ab/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin link" />
            </a>
          </span>
        </div>
        <div className={styles.portfolioContainer}>
          <span> Check out my PORTFOLIOS</span>
          <div className={styles.portfolios}>
            <NavTile mode="webdev" />
            <NavTile mode="uxui" />
            <NavTile mode="art" />
          </div>
        </div>
      </section>

      <hr />
      <section className={styles.showcase}>
        <h2> Here's some of my recent projects in Webdev, UX/UI, and Art!</h2>
        <h3> TSE to-do list Fullstack (Web Development) </h3>
        <img src={img1} alt="todo app programmed by jesus azpitarte" />
        <p>
          A simple dynamic todo app developed as part of TSE’s onboarding
          process, showcasing my self learning ability and independence.
        </p>

        <h3> Instone (UXUI)</h3>
        <img src={img2} alt="instone app designed by jesus azpitarte" />
        <p>
          An elegant desktop app for logging web developer journals, where I led
          the UX/UI design.
        </p>

        <h3> TSE to-do list Fullstack (Art)</h3>
        <img src={img3} alt="dragon illustrated by jesus azpitarte" />
        <p>
          Intricate dragon illustration, showcasing dynamic linework and bold
          creativity.
        </p>
      </section>
    </div>
  );
};

export default Home;
