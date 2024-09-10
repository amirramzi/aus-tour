import React from "react";
import styles from "./page.module.scss";
import { antonio, inter } from "../fonts";
import Footer from "../components/sections/footer/Footer";
import Nav from "../components/ui/nav/Nav";
const MachTablePage = () => {
  return (
    <div className={styles.container}>
      <Nav set={5} />
      <div className={styles.wrapper}>
        <div className={styles.child}>
          <div className={styles.content}>
            <h1 className={antonio.className}>Matches & Table</h1>
            <div>Coming Soon...</div>
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <Footer />
      </div>
    </div>
  );
};

export default MachTablePage;
