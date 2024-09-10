import React from "react";
import styles from "./page.module.scss";
import { antonio, inter } from "../fonts";
import StadiumCard from "./components/StadiumCard";
const StadiumPage = () => {
  const stadiumList: {
    title: string;
    date: string;
    loc: string;
  }[] = [
    {
      title: "Stadthalle Steyr",
      date: "January 13, 2024",
      loc: "Kaserngasse 6, 4400 Steyr",
    },
    {
      title: "Sporthalle Viktring Klagenfurt",
      date: "January 13, 2024",
      loc: "Schulstraße 2A, 9073 Klagenfurt am Wörthersee",
    },
    {
      title: "Sporthalle Villach",
      date: "January 13, 2024",
      loc: "Sporthalle St. Martin. Sankt Martiner Straße 11 9500 Villach",
    },
    {
      title: "Messezentrum Dornbirn",
      date: "January 13, 2024",
      loc: "Messepl. 1, 6854 Dornbirn",
    },
    {
      title: "Sporthalle Baden",
      date: "January 13, 2024",
      loc: "Schulzentrum West/RWG. Balger Str. 15 76532 Bade",
    },
    {
      title: "Sporthalle Eferding",
      date: "January 13, 2024",
      loc: "Bräuhausstraße 5, 4070 Eferding",
    },
    {
      title: "Sporthalle Leonding",
      date: "January 13, 2024",
      loc: "Ehrenfellner-Straße 9, 4060 Leonding",
    },
    {
      title: "Sporthalle Fischamend",
      date: "January 13, 2024",
      loc: "Springholzgasse, 2401 Fischamend-Markt",
    },
    {
      title: "Sporthalle Rum",
      date: "January 13, 2024",
      loc: "Aurain 2 6063 Rum",
    },
    {
      title: "Augustinum Halle Graz",
      date: "January 13, 2024",
      loc: "Lange G. 2, 8010 Graz",
    },
    {
      title: "Sporthalle Hausmannstätten",
      date: "January 13, 2024",
      loc: "Hauptstraße 50, 8071 Hausmannstätten",
    },
    {
      title: "Stadium No. 12",
      date: "January 13, 2024",
      loc: "Here is the address",
    },
    {
      title: "Stadium No. 13",
      date: "January 13, 2024",
      loc: "Here is the address",
    },
    {
      title: "Stadium No. 14",
      date: "January 13, 2024",
      loc: "Here is the address",
    },
    {
      title: "Stadium No. 15",
      date: "January 13, 2024",
      loc: "Here is the address",
    },
    {
      title: "Stadium No. 16",
      date: "January 13, 2024",
      loc: "Here is the address",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <h1 className={antonio.className}>Stadium</h1>
      <p className={inter.className}>{stadiumList.length} Locations</p>
      <div className={styles.cardWrapper}>
        {stadiumList.map((stadium, index) => (
          <StadiumCard
            key={index}
            title={stadium.title}
            date={stadium.date}
            loc={stadium.loc}
          />
        ))}
      </div>
    </div>
  );
};

export default StadiumPage;
