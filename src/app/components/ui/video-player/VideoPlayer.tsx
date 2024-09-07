import React from "react";
import styles from "./VideoPlayer.module.scss";
const VideoPlayer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <video
        className={styles.player}
        autoPlay
        loop
        muted
        src="/video/heroVideo.mp4"
        width="100%"
      >
        <source src="/video/heroVideo.mp4" type="video/mp4" width={100} />
      </video>
      <div className={styles.back} />
      <div className={styles.gradient}>{children}</div>
    </div>
  );
};

export default VideoPlayer;
