"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Nav.module.scss";
import Logo from "/public/img/logo.png";
import NavItem from "./NavItem";

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");

      if (nav) {
        const offset = window.scrollY;
        if (offset > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`${styles.brand} ${scrolled ? styles.branS : ""}`}>
          <Image className={styles.img} src={Logo} alt="AUSTRIA TOUR LOGO" />
          <p>AUSTRIA TOUR</p>
        </div>
        <NavItem />
      </div>
    </nav>
  );
};

export default Nav;
