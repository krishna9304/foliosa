import { FunctionComponent } from "react";
import styles from "./skills.module.scss";

import html from "../../assets/skillsIcons/html.svg";
import css from "../../assets/skillsIcons/css.svg";
import docker from "../../assets/skillsIcons/docker.svg";
import firebase from "../../assets/skillsIcons/firebase.svg";
import git from "../../assets/skillsIcons/git.svg";
import mongodb from "../../assets/skillsIcons/mongodb.svg";
import mysql from "../../assets/skillsIcons/mysql.svg";
import nodejs from "../../assets/skillsIcons/nodejs.svg";
import react from "../../assets/skillsIcons/react.svg";
import redux from "../../assets/skillsIcons/redux.svg";
import sass from "../../assets/skillsIcons/sass.svg";
import typescript from "../../assets/skillsIcons/typescript.svg";
import java from "../../assets/skillsIcons/java.gif";
import javascript from "../../assets/skillsIcons/javascript.gif";
import python from "../../assets/skillsIcons/python.gif";

interface SkillsProps {}

const Skills: FunctionComponent<SkillsProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconsContainer}>
        <div className={styles.icon}>
          <img src={javascript} alt="javascript" />
        </div>
        <div className={styles.icon}>
          <img src={typescript} alt="typescript" />
        </div>
        <div className={styles.icon}>
          <img src={react} alt="react" />
        </div>
        <div className={styles.icon}>
          <img src={redux} alt="redux" />
        </div>
        <div className={styles.icon}>
          <img src={nodejs} alt="nodejs" />
        </div>
        <div className={styles.icon}>
          <img src={python} alt="python" />
        </div>
        <div className={styles.icon}>
          <img src={mongodb} alt="mongodb" />
        </div>
        <div className={styles.icon}>
          <img src={sass} alt="sass" />
        </div>
        <div className={styles.icon}>
          <img src={html} alt="html" />
        </div>
        <div className={styles.icon}>
          <img src={css} alt="css" />
        </div>
        <div className={styles.icon}>
          <img src={docker} alt="docker" />
        </div>
        <div className={styles.icon}>
          <img src={git} alt="git" />
        </div>
        <div className={styles.icon}>
          <img src={mysql} alt="mysql" />
        </div>
        <div className={styles.icon}>
          <img src={java} alt="java" />
        </div>
        <div className={styles.icon}>
          <img src={firebase} alt="firebase" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
