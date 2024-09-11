import React from "react";
import Image from "next/image";
import styles from "./Teams.module.scss";
import logo1 from "/public/img/team-logo/logo1.png";
import logo2 from "/public/img/team-logo/logo2.png";
import logo3 from "/public/img/team-logo/logo3.png";
import logo4 from "/public/img/team-logo/logo4.png";
import logo5 from "/public/img/team-logo/logo5.png";
import logo6 from "/public/img/team-logo/logo6.png";
// import Select from "../../ui/select/Select";
import { antonio, inter } from "@/app/fonts";
import Select from "../../ui/select/Select";

const Teams: React.FC = () => {
  const team = [logo1, logo2, logo3, logo4, logo5, logo6, logo1, logo2];
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div>
            <h3 className={antonio.className}>Registered Teams</h3>
            <p className={inter.className}>
              Check out the teams that have already signed up to compete in the
              Austria Tour.
            </p>
          </div>
          <div className={styles.select}>
            <Select
              size="full"
              label="stadium"
              name="stadium"
              options={[
                { value: "Sporthalle Viktring Klagenfurt" },
                { value: "Stadthalle Steyr1" },
                { value: "Stadthalle Steyr2" },
                { value: "Stadthalle Steyr3" },
              ]}
              value="Sporthalle Viktring Klagenfurt"
            />
          </div>
        </div>
        <div className={styles.teamWrapper}>
          {team.map((item, index) => (
            <div key={index} className={styles.teamCard}>
              <Image src={item} alt="team logo" />
              <span className={inter.className}>Team Very Long Name</span>
            </div>
          ))}
          {team.map((item, index) => (
            <div key={index} className={styles.teamCard}>
              <Image src={item} alt="team logo" />
              <span>Team Very Long Name</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
