import { FunctionComponent } from "react";
import Education from "../../components/education";
import Layout from "../../components/layout";
import Profile from "../../components/profile";
import Projects from "../../components/projects";
import Skills from "../../components/skills";
import WorkExperience from "../../components/workExp";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <Layout>
      <Profile />
      <Projects />
      <WorkExperience />
      <Education />
      <Skills />
    </Layout>
  );
};

export default HomePage;
