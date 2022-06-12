import { FunctionComponent } from "react";
import Layout from "../../components/layout";
import Profile from "../../components/profile";
import Projects from "../../components/projects";
import WorkExperience from "../../components/workExp";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <Layout>
      <Profile />
      <Projects />
      <WorkExperience />
    </Layout>
  );
};

export default HomePage;
