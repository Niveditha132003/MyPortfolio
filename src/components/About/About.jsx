import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>December 2021-Present</h3>
              <p>
                Btech Computer Science and Engineering
                <h6>Siddaganga Institute of Technology</h6>
                <h6>Tumkur,Karnataka</h6>
                <h6>CGPA-9.78</h6>
            
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Intermediate</h3>
              <p>
                 Maths,Physics,Chemistry(M.P.C)
                 <h6>Narayana Junior College</h6>
                 <h6>Anantapur,AndhraPradesh</h6>
                 <h6>98.8%</h6>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Participations and Achievements</h3>
              <ul >
                   <li><h4>Got Best Women Team Award in IEEE Hackathon(WIE Code)</h4></li>
                     <li><h4>Participated in many coding competitions like cnario,webify,robocor etc; </h4></li>
                     <li><h4>Got District 1st in Intermediate in Board Exams</h4></li>
                     <li><h4>Selected for 2nd level in Maths Olympiads in 7th and 9th grade</h4></li>
                     <li><h4>Solved 200+ problems on different coding platforms like GFG,Leetcode,HackerRank</h4></li>
                     </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};