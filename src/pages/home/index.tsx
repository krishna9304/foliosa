import { FunctionComponent } from "react";
import Layout from "../../components/layout";
import avatar from "../../assets/avatar.png";
import styles from "./home.module.scss";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <Layout>
      <div className={styles.homeContainer}>
        <img src={avatar} alt="avatar" />
        <h1>KRISHNA MAHATO</h1>
      </div>
    </Layout>
  );
};

export default HomePage;
