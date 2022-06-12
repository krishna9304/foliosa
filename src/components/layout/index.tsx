import {
  faBriefcase,
  faBuildingColumns,
  faDiagramProject,
  faUser,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useEffect, useState } from "react";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const [navState, setNavState] = useState(0);

  const handleScroll = (e: any) => {
    const initialScroll = e.target.scrollTop;
    const val = Math.round(initialScroll / e.target.clientHeight);
    console.log(val);

    setNavState(val);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.sideNavContainer}>
        <div className={styles.sideNav}>
          <div
            style={{
              backgroundColor: navState == 0 ? "white" : "",
              color: navState == 0 ? "black" : "white",
            }}
            className={styles.navicon}
          >
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div
            style={{
              backgroundColor: navState == 1 ? "white" : "",
              color: navState == 1 ? "black" : "white",
            }}
            className={styles.navicon}
          >
            <FontAwesomeIcon icon={faDiagramProject} />
          </div>
          <div
            style={{
              backgroundColor: navState == 2 ? "white" : "",
              color: navState == 2 ? "black" : "white",
            }}
            className={styles.navicon}
          >
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div
            style={{
              backgroundColor: navState == 3 ? "white" : "",
              color: navState == 3 ? "black" : "white",
            }}
            className={styles.navicon}
          >
            <FontAwesomeIcon icon={faBuildingColumns} />
          </div>
          <div
            style={{
              backgroundColor: navState == 4 ? "white" : "",
              color: navState == 4 ? "black" : "white",
            }}
            className={styles.navicon}
          >
            <FontAwesomeIcon icon={faWrench} />
          </div>
        </div>
      </div>
      <div className={styles.contentArea}>
        <div onScroll={handleScroll} className={styles.contentDiv}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
