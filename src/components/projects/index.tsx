import { FunctionComponent } from "react";
import styles from "./projects.module.scss";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  return <div className={styles.container}>Projects</div>;
};

export default Projects;
