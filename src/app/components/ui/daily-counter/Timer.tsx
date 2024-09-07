"use client";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "./Timer.module.scss";
import { inter } from "@/app/fonts";

const Timer: React.FC = () => {
  const months = 7;
  const days = 30;
  const hours = 10;

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
          duration={months * 30 * 24 * 60 * 60}
          initialRemainingTime={months * 30 * 24 * 60 * 60}
          colors="#f8f8f8"
          strokeWidth={3}
          trailColor="#ffffff26"
        >
          {({ elapsedTime }) =>
            renderTime(
              "Months",
              Math.ceil(
                (months * 30 * 24 * 60 * 60 - elapsedTime) / (30 * 24 * 60 * 60)
              )
            )
          }
        </CountdownCircleTimer>
      </div>

      <div className={styles.timerSvgWrapper}>
        <CountdownCircleTimer
          isPlaying
          duration={days * 24 * 60 * 60}
          initialRemainingTime={days * 24 * 60 * 60}
          colors="#f8f8f8"
          strokeWidth={3}
          trailColor="#ffffff26"
        >
          {({ elapsedTime }) =>
            renderTime(
              "Days",
              Math.ceil((days * 24 * 60 * 60 - elapsedTime) / (24 * 60 * 60))
            )
          }
        </CountdownCircleTimer>
      </div>

      <div className={styles.timerSvgWrapper}>
        <CountdownCircleTimer
          isPlaying
          duration={hours * 60 * 60}
          initialRemainingTime={hours * 60 * 60}
          colors="#f8f8f8"
          strokeWidth={3}
          trailColor="#ffffff26"
        >
          {({ elapsedTime }) =>
            renderTime(
              "Hours",
              Math.ceil((hours * 60 * 60 - elapsedTime) / (60 * 60))
            )
          }
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default Timer;
