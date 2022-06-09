import { FunctionComponent } from "react";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sideNav}></div>
      <div className={styles.contentArea}>
        <div className={styles.contentDiv}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
