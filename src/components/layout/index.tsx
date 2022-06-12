import {
  faBriefcase,
  faBuildingColumns,
  faDiagramProject,
  faUser,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sideNavContainer}>
        <div className={styles.sideNav}>
          <div className={styles.navicon}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className={styles.navicon}>
            <FontAwesomeIcon icon={faDiagramProject} />
          </div>
          <div className={styles.navicon}>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div className={styles.navicon}>
            <FontAwesomeIcon icon={faBuildingColumns} />
          </div>
          <div className={styles.navicon}>
            <FontAwesomeIcon icon={faWrench} />
          </div>
        </div>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.contentDiv}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
