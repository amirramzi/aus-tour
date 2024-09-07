"use client";
import React, { useState } from "react";
import styles from "./Location.module.scss";
import Calendar from "../../icon/Calendar";
import AustriaMap from "../../icon/AustriaMap";

const Location: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(0);
  const [activeLoc, setActiveLoc] = useState<number | null>(0);
  const clickHandler = (index: number) => {
    setActiveCard(index);
    setActiveLoc(index);
  };

  const LocCard: { name: string }[] = [
    { name: "Stadthalle Steyr" },
    { name: "Sporthalle Viktring Klagenfurt" },
    { name: "Sporthalle Villach" },
    { name: "Messezentrum Dornbirn" },
    { name: "Sporthalle Baden" },
    { name: "Sporthalle Eferding" },
    { name: "Sporthalle Leonding" },
    { name: "Fischamend" },
    { name: "Sporthalle Rum" },
    { name: "Augustinum Halle Graz" },
    { name: "Sporthalle Hausmannstätten" },
    { name: "Sporthalle Baden" },
    { name: "Stadium No. 13" },
    { name: "Stadium No. 14" },
    { name: "Stadium No. 15" },
    { name: "Stadium No. 16" },
  ];

  return (
    <div className={styles.wrapper}>
      <h3>Dates & Locations</h3>

      <div className={styles.cardWrapper}>
        {LocCard.map((item, index) => (
          <div
            key={index}
            onClick={() => clickHandler(index)}
            className={
              activeCard === index
                ? `${styles.locCard} ${styles.active}`
                : styles.locCard
            }
          >
            <h6>{item.name}</h6>
            <div className={styles.date}>
              <Calendar />
              <span>Sat, 25 Nov 2023</span>
            </div>
          </div>
        ))}
      </div>

      <AustriaMap className={styles.map} activeLoc={activeLoc} />
    </div>
  );
};

export default Location;
