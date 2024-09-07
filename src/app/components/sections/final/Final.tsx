import React from "react";
import styles from "./Final.module.scss";
import img from "/public/img/final-match.png";
import Image from "next/image";
import Calendar from "../../icon/Calendar";
import Location from "../../icon/Location";
import DailyCounter from "../../ui/daily-counter/DailyCounter";
const Final: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image className={styles.img} alt="final match" src={img} />
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>FINAL MATCH</h2>
            <p>
              The Austria Tour concludes with the top teams from 16 events
              competing.
            </p>
          </div>
          <div className={styles.date}>
            <div className={styles.loc}>
              <div>
                <Calendar /> <span> January 13, 2024 </span>
              </div>
              <div>
                <Location />
                <span>Sportzentrum Niederösterreich, St. Pölten</span>
              </div>
            </div>
            <DailyCounter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
