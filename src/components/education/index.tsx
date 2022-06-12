import { Steps } from "antd";
import { FunctionComponent } from "react";
import styles from "./education.module.scss";
const { Step } = Steps;

interface EducationProps {}

const Education: FunctionComponent<EducationProps> = () => {
  return (
    <div className={styles.container}>
      <Steps progressDot direction="vertical">
        <Step
          title="Bachelor’s in Technology: Computer Science Engineering -- ITER, Siksha O’ Anusandhan University – Bhubaneswar, Odisha (2020-2024)"
          description="Secured 9.5 CGPA in semester 3"
          status="finish"
        />
        <Step
          title="Intermediate: Pure Science -- St. Mary’s English High School- Bistupur, Jamshedpur, Jharkhand (2018-2020)"
          description="Secured 88.6% in 12th Board Exams."
          status="finish"
        />
        <Step
          title="Matriculation -- Central Public School – Adityapur, Jamshedpur, Jharkhand (2008-2018)"
          description="Secured 93.6% in 10th Board Exams & I was the subject topper in Computer Science securing full marks."
          status="finish"
        />
      </Steps>
    </div>
  );
};

export default Education;
