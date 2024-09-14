import React from "react";
import VideoPlayer from "../../ui/video-player/VideoPlayer";
import Nav from "../../ui/nav/Nav";
import ButtonRegister from "../../ui/button/ButtonRegister";
import styles from "./Hero.module.scss";
import { antonio } from "@/app/fonts";
import Timer from "../../ui/daily-counter/Timer";

const Hero: React.FC = () => {
  return (
    <VideoPlayer>
      <Nav set={700} />
      <div className={styles.content}>
        <h1 className={`${styles.title} ${antonio.className}`}>
          Austria Futsal Tour
        </h1>
        <p className={styles.description}>
          Join top teams and fans from around the world for a high-energy,
          action-packed tournament.
        </p>
        <div className={styles.counter}>
          <Timer />
        </div>

        <ButtonRegister />
      </div>
    </VideoPlayer>
  );
};

export default Hero;
