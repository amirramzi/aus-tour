import Image from "next/image";
import styles from "./Nav.module.scss";

import Logo from "/public/img/logo.png";
import NavItem from "./NavItem";
const Nav = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.brand}>
        <Image className={styles.img} src={Logo} alt="AUSTRIA TOUR LOGO" />
        <p>AUSTRIA TOUR</p>
      </div>
      <NavItem />
    </nav>
  );
};

export default Nav;
