import { FunctionComponent } from "react";
import avatar from "../../assets/avatar.png";
import styles from "./profile.module.scss";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  return (
    <div className={styles.container}>
      <img src={avatar} alt="avatar" />
      <h1>KRISHNA MAHATO</h1>
      <p>
        Enthusiastic and passionate software developer, desirous to contribute
        to team success through hard work, attention to detail and excellent
        organisational skills. Clear understanding of frontend and backend and 2
        yr (approx.) experience in full stack web development. Motivated to
        learn, grow and excel in the field of software development.
      </p>
    </div>
  );
};

export default Profile;
