"use client";
import React from "react";
import Link from "next/link";
import Burger from "../../icon/Burger";
import styles from "./NavItem.module.scss";
const NavItem = () => {
  const navItem: {
    id: number;
    name: string;
    href: string;
  }[] = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Matches & Table", href: "/" },
    { id: 3, name: "Rules", href: "/" },
    { id: 4, name: "Stadium", href: "/" },
  ];

  return (
    <>
      {/* desktop */}
      <ul className={styles.desktop}>
        {navItem.map((item) => (
          <li key={item.id} className={styles.navItem}>
            {item.name}
          </li>
        ))}
      </ul>
      {/* mobile */}
      <>
        <Burger className={styles.burgerIcon} />
      </>
    </>
  );
};

export default NavItem;
