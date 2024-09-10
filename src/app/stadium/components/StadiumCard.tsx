import React from "react";
import styles from "./StadiumCard.module.scss";
import Image from "next/image";
import Calendar from "@/app/components/icon/Calendar";
import Location from "@/app/components/icon/Location";
import stadiumImg from "/public/stadium.png";
import { inter } from "@/app/fonts";

interface StadiumCardProps {
  title: string;
  date: string;
  loc: string;
}

const StadiumCard: React.FC<StadiumCardProps> = ({ title, date, loc }) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={stadiumImg}
        alt="stadium"
        className={styles.img}
        width={200}
        height={166}
      />
      <div className={styles.detail}>
        <h4 className={inter.className}>{title}</h4>
        <div className={styles.dateLoc}>
          <div className={styles.icon}>
            <Calendar />
            <Location />
          </div>
          <ul>
            <li className={inter.className}>{date}</li>
            <li className={inter.className}>{loc}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StadiumCard;
