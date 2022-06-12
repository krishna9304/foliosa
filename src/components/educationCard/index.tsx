import { FunctionComponent } from "react";
import styles from "./educationCard.module.scss";

interface EducationCardProps {
  title: string;
  subtitle: string;
  description: string;
  selected: number;
  setSelected: (selected: number) => void;
  idx: number;
}

const EducationCard: FunctionComponent<EducationCardProps> = ({
  title,
  subtitle,
  description,
  selected,
  setSelected,
  idx,
}) => {
  return (
    <div
      style={{
        transform: selected === idx ? "scale(1.1)" : "scale(0.9)",
        background:
          selected === idx
            ? "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)"
            : "",
      }}
      onClick={() => setSelected(idx)}
      className={styles.cardContainer}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div
        style={{
          display: selected === idx ? "block" : "none",
        }}
        className={styles.description}
      >
        {description}
      </div>
    </div>
  );
};

export default EducationCard;
