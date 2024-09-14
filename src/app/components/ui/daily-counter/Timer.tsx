"use client";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "./Timer.module.scss";
import { inter } from "@/app/fonts";

const targetDate = new Date("2025-04-12T05:00:00Z");

const Timer: React.FC = () => {
  const now = new Date();
  const remainingTimeInSeconds = Math.max(
    Math.floor((targetDate.getTime() - now.getTime()) / 1000),
    0
  );

  const renderTime = (dimension: string, time: number) => (
    <div className={styles.timer}>
      <div className={`${styles.time} ${inter.className}`}>{time}</div>
      <div className={`${styles.dimension} ${inter.className}`}>
        {dimension}
      </div>
    </div>
  );

  return (
    <div className={styles.timerWrapper}>
      <div className={styles.timerSvgWrapper}>
        <CountdownCircleTimer
          isPlaying
          duration={7 * 30 * 24 * 60 * 60} // 7 months in seconds
          initialRemainingTime={remainingTimeInSeconds}
          colors="#f8f8f8"
          strokeWidth={3}
          trailColor="#ffffff26"
        >
          {({ elapsedTime }) =>
            renderTime(
              "Months",
              Math.ceil(
                (7 * 30 * 24 * 60 * 60 - elapsedTime) / (30 * 24 * 60 * 60)
              )
            )
          }
        </CountdownCircleTimer>
      </div>

      <div className={styles.timerSvgWrapper}>
        <CountdownCircleTimer
          isPlaying
          duration={30 * 24 * 60 * 60} // 30 days in seconds
          initialRemainingTime={remainingTimeInSeconds % (30 * 24 * 60 * 60)}
          colors="#f8f8f8"
          strokeWidth={3}
          trailColor="#ffffff26"
        >
          {({ elapsedTime }) =>
            renderTime(
              "Days",
              Math.ceil((30 * 24 * 60 * 60 - elapsedTime) / (24 * 60 * 60))
            )
          }
        </CountdownCircleTimer>
      </div>

      <div className={styles.timerSvgWrapper}>
        <CountdownCircleTimer
          isPlaying
          duration={24 * 60 * 60} // 10 hours in seconds
          initialRemainingTime={remainingTimeInSeconds % (24 * 60 * 60)}
          colors="#f8f8f8"
          strokeWidth={3}
          trailColor="#ffffff26"
        >
          {({ elapsedTime }) =>
            renderTime(
              "Hours",
              Math.ceil((24 * 60 * 60 - elapsedTime) / (60 * 60))
            )
          }
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default Timer;
