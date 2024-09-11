import Marquee from "react-fast-marquee";
import Image from "next/image";
import styles from "./IconBrand.module.scss";

import logo1 from "/public/img/logo-sample1.png";
import logo2 from "/public/img/logo-sample2.png";
import logo3 from "/public/img/logo-sample3.png";
import logo4 from "/public/img/logo-sample4.png";

const IconBrand = () => {
  const logos = [logo1, logo2, logo3, logo4];

  return (
    <div className={styles.bg}>
      <div className={styles.wrapper}>
        <Marquee speed={100} direction="left">
          {logos.map((logo, index) => (
            <div key={index} className={styles.item}>
              <Image src={logo} alt="logo" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default IconBrand;
