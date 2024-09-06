import React from "react";
import VideoPlayer from "../../ui/video-player/VideoPlayer";
import Nav from "../../ui/nav/Nav";
import ButtonRegister from "../../ui/button/ButtonRegister";
import DailyCounter from "../../ui/daily-counter/DailyCounter";
import styles from "./Hero.module.scss";
const Hero: React.FC = () => {
  return (
    <VideoPlayer>
      <Nav />
      <div className={styles.content}>
        <h1 className={styles.title}>Austria Futsal Tour</h1>
        <p className={styles.description}>
          Join top teams and fans from around the world for a high-energy,
          action-packed tournament.
        </p>
        <div className={styles.counter}>
          <DailyCounter />
        </div>
        <ButtonRegister />
      </div>
    </VideoPlayer>
  );
};

export default Hero;
