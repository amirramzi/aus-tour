import React from "react";
import Nav from "../ui/nav/Nav";
import Footer from "../sections/footer/Footer";
import styles from "./NavFoot.module.scss";
const NavFoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.wrapper}>
        <div className={styles.child}>{children}</div>
      </div>
      <div className={styles.foot}>
        <Footer />
      </div>
    </div>
  );
};

export default NavFoot;
