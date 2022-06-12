import { FunctionComponent, useEffect, useState } from "react";
import EducationCard from "../educationCard";
import styles from "./education.module.scss";

interface EducationProps {}

const Education: FunctionComponent<EducationProps> = () => {
  const [selected, setSelected] = useState(0);
  const [myEducation, setMyEducation] = useState([
    {
      title: "Bachelor’s in Technology: Computer Science Engineering",
      subtitle: "ITER, Siksha O’ Anusandhan University – Bhubaneswar, Odisha",
      description: "Secured 9.5 CGPA in semester 3",
      idx: 0,
    },
    {
      title: "Intermediate: Pure Science",
      subtitle:
        "St. Mary’s English High School- Bistupur, Jamshedpur, Jharkhand",
      description: "Secured 88.6% in 12th Board Exams.",
      idx: 1,
    },
    {
      title: "Matriculation",
      subtitle: "Central Public School – Adityapur, Jamshedpur, Jharkhand",
      description:
        "Secured 93.6% in 10th Board Exams & I was the subject topper in Computer Science securing full marks.",
      idx: 2,
    },
  ]);

  useEffect(() => {
    let res = [];
    let temp = myEducation;
    const selectEdu = temp.filter((edu) => edu.idx == selected);
    const notSelectEdu = temp.filter((edu) => edu.idx != selected);
    console.log();

    res.push(notSelectEdu[0]);
    res.push(selectEdu[0]);
    res.push(notSelectEdu[1]);
    setMyEducation(res);
  }, [selected]);

  return (
    <div className={styles.container}>
      {myEducation.map((edu, index) => {
        return (
          <EducationCard
            key={index}
            {...edu}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

export default Education;
