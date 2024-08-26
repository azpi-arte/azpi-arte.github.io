import React from "react";
import styles from "./Aboutme.module.css";
import id from "../assets/images/aboutme/id-card.png";
import aboutme1 from "../assets/images/aboutme/aboutme1.jpg";
import aboutme2 from "../assets/images/aboutme/aboutme2.jpg";
import friends from "../assets/images/aboutme/friends.jpg";
import drawing1 from "../assets/images/aboutme/drawing1.jpg";
import song from "../assets/audio/asymptote.mp3";

const Aboutme = () => {
  return (
    <div className={styles.aboutmeContainer}>
      <h1> About Me</h1>
      <section className={styles.profile}>
        <span>
          <img
            src={id}
            alt="name: Jesus Azpitarte, major: Computer Science, minor: ICAM (art), Graduating 2026 UC San Diego"
          />

          <p>
            Im <strong>Jesus Azpitarte</strong>, a third year computer science
            undergraduate at UCSD. <br /> <br /> I care most about learning,
            giving to others, and challenging myself. I hope to continue working
            with others who care about self-growth, creativity, and giving back
            to their community. <br />
            <br /> I spend most of my time studying for my classes and focusing
            on my extracurricular activities like
            <strong>
              Scholars Society, Triton Software Engineering, and the Early
              Research Scholars Program.
            </strong>
          </p>
        </span>
      </section>

      <section className={styles.extracurriculars}>
        <h3>Extracurriculars</h3>
        <span className={styles.aboutme1}>
          <div>
            <h4> Scholars Society </h4>
            <p>
              I now proudly serve as the Scholars Society President where I host
              weekly meetings and lead the creation of large scale social and
              academic events. The club is dedicated to providing social and
              academic opportunities for Hundreds of others scholars.
              <br /> <br />
              Admission into the club requires UC-recognized academic merit.
              <br /> <br />
              These are some of the board members I worked with for my second
              year where I held the position of Social Co-Chair
            </p>
          </div>

          <img
            src={aboutme1}
            alt="Jesus Azpitarte and four other Scholars Society members."
            loading="lazy"
          />
        </span>

        <span className={styles.aboutme2}>
          <h4> Triton Softwaree Engineering </h4>
          <img
            src={aboutme2}
            alt="Jesus Azpitarte and four other Scholars Society members."
            loading="lazy"
          />

          <p>
            I also did lots of <strong> UX/UI </strong> designing with Triton
            Software Engineering (TSE.) TSE is a student ran UCSD organization
            which focuses on providing digital tools/platforms to local
            non-profit communities for free. <br /> <br /> One of my favorite
            TSE memories was being able to present to bilingual high school
            students about college opportunities during our club’s annual
            outreach event. Interacting with the high school students in their
            own language made me feel a lot closer to them and I even became
            friends with some of them. Now, I’m a dedicated
            <strong> TSE Developer </strong> and hope to continue expanding my
            role in TSE!
          </p>
        </span>
      </section>
      <hr />
      <h3> Hobbies </h3>
      <section className={styles.hobbies}>
        <p>
          When I’m not studying or doing extracurriculars, i’m usually drawing,
          making music, working out, studying quantum mechanics, chilling with
          friends, or gaming. Here are some of my recent projects and
          adventures.
        </p>
        <h4> Skydiving</h4>
        <img
          src={friends}
          alt="Jesus Azpitarte and 3 other friends after skydiving"
          loading="lazy"
        />

        <h4> Fit Check!</h4>
        <img
          src={drawing1}
          alt="drawing of a stylized girl in cool clothes"
          loading="lazy"
        />

        <h4>Cool Song</h4>
        <p> Here's a quick WIP of a song I was working on.</p>
        <audio controls>
          <source src={song} type="audio/mpeg" />
          Your browswer does not support the audio element.
        </audio>
      </section>
    </div>
  );
};

export default Aboutme;
