import React from "react";
import styles from "./Place.module.scss";
import Tickets from "/public/svg/Tickets.svg";
import Frame from "../../../../../public/svg/Frame.svg";
import Frame29 from "/public/svg/Frame29.svg";
import Image from "next/image";
import { antonio, inter } from "@/app/fonts";

const Place: React.FC = () => {
  const cardItem: {
    title: string;
    img: any;
    p: string;
    className: string;
  }[] = [
    {
      title: "2st Place",
      img: Frame,
      p: "Team training suits",

      className: styles.radialLeft,
    },
    {
      title: "1st Place",
      img: Tickets,
      p: "Trip for 10 people to a top European club (including flight and match tickets)",
      className: styles.radialBottomLeft,
    },

    {
      title: "3st Place",
      img: Frame29,
      p: "Team jerseys",
      className: styles.radialTopRight,
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3 className={antonio.className}>Win Amazing Prizes!</h3>
        <p className={inter.className}>
          Compete for a chance to win amazing prizes.
        </p>
      </div>
      <div className={styles.cardWrapper}>
        {cardItem.map((item, index) => (
          <div key={index} className={`${styles.card} `}>
            <div className={item.className}></div>
            <h5 className={inter.className}>{item.title}</h5>
            <Image className={styles.img} src={item.img} alt="" width={100} />
            <p className={inter.className}>{item.p}</p>
          </div>
        ))}
      </div>
      <p className={styles.note}>
        <span>Note: </span>
        <span> Only rostered players can make the trip!</span>
      </p>
    </div>
  );
};

export default Place;
