import React from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import ButtonRegister from "../../ui/button/ButtonRegister";
import aboutImg from "/public/img/about.png";
import Ball from "../../icon/Ball";
import Location from "../../icon/Location";
import Time from "../../icon/Time";
import Euro from "../../icon/Euro";
const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h2>About Austria Tour</h2>
        <p>
          Golden Sports is hosting the Austria Tour, the country’s premier
          indoor football event, featuring 16 qualifying tournaments and an epic
          final showdown. Join top teams from across the region as they compete
          for glory and incredible prizes.
        </p>
      </div>
      <div className={styles.wrapper}>
        <Image alt="about" src={aboutImg} className={styles.img} />
        <div className={styles.overview}>
          <h3>Tournament Overview</h3>
          <ul>
            <li>
              <Ball /> Classic indoor football with boards
            </li>
            <li>
              <Location /> 16 locations
            </li>
            <li>
              <Time />
              Morning & afternoon groups
            </li>
            <li>
              <Euro />
              €130
            </li>
          </ul>
          <ButtonRegister />
        </div>
      </div>
    </div>
  );
};

export default About;
