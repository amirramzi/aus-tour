import React from "react";
import styles from "./Final.module.scss";
import img from "/public/img/final-match.png";
import Image from "next/image";
import Calendar from "../../icon/Calendar";
import Location from "../../icon/Location";
import { antonio, inter } from "@/app/fonts";
import Timer from "../../ui/daily-counter/Timer";

const Final: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image className={styles.img} alt="final match" src={img} />
        <div className={styles.content}>
          <div className={styles.radial1} />
          <div className={styles.radial2} />
          <div className={styles.title}>
            <h2 className={antonio.className}>FINAL MATCH</h2>
            <p className={inter.className}>
              The Austria Tour concludes with the top teams from 16 events
              competing.
            </p>
          </div>
          <div className={styles.date}>
            <div className={styles.dateLoc}>
              <div className={styles.icon}>
                <Calendar />
                <Location />
              </div>
              <ul>
                <li className={inter.className}> January 13, 2024 </li>
                <li className={inter.className}>
                  Sportzentrum Niederösterreich, St. Pölten
                </li>
              </ul>
            </div>
            <div className={styles.timer}>
              <Timer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
