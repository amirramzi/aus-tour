import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import Logo from "/public/img/logo.png";
import Email from "../../icon/Email";
import Location from "../../icon/Location";
const Footer: React.FC = () => {
  return (
    <>
      {" "}
      <footer className={styles.wrapper}>
        <div className={styles.footer}>
          <div>
            <div className={styles.brand}>
              <Image
                className={styles.img}
                src={Logo}
                alt="AUSTRIA TOUR LOGO"
              />
              <p>AUSTRIA TOUR</p>
            </div>
            <div className={styles.support}>
              <div>
                <Email />
                <span>support@goldensports.at</span>
              </div>
              <div>
                <Location />
                <span>Maulbertschgasse 7/5, 1190 Wien</span>
              </div>
            </div>
          </div>
          <ul>
            <li>About Golden Sports</li>
            <li>Golden Sports Events</li>
            <li>AGB</li>
            <li>Imprint</li>
          </ul>
        </div>
      </footer>
      <div className={styles.copy}>
        <span> &#169; 2024 Austria Tour, all rights reserved.</span>
      </div>
    </>
  );
};

export default Footer;
