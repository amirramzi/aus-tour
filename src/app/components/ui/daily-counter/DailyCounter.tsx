import React from "react";
import styles from "./DailyCounter.module.scss";

interface CircleProps {
  value: string;
  label: string;
}

const Circle = ({ value, label }: CircleProps) => {
  return (
    <div className={styles.progress}>
      <div className={styles.circle}>
        <div className={styles.value}>{value}</div>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  );
};

const DailyCounter = () => {
  return (
    <div className={styles.dailyCounter}>
      <Circle value="7" label="Months" />
      <Circle value="30" label="Days" />
      <Circle value="10" label="Hours" />
    </div>
  );
};

export default DailyCounter;
