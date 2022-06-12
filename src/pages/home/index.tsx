import { FunctionComponent } from "react";
import Layout from "../../components/layout";
import Profile from "../../components/profile";
import Projects from "../../components/projects";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <Layout>
      <Profile />
      <Projects />
    </Layout>
  );
};

export default HomePage;
