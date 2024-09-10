"use client";
import React, { useState, useRef, useEffect } from "react";
import Burger from "../../icon/Burger";
import CloseMenu from "../../icon/CloseMenu";
import styles from "./NavItem.module.scss";
import { inter } from "../../../fonts";
import OutlineButton from "../button/OutlineButton";
import Arrow from "../../icon/Arrow";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const NavItem: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPositionY, setMenuPositionY] = useState(0);
  const [dragStartY, setDragStartY] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const path = usePathname();

  const handleBurgerClick = () => {
    setIsMenuOpen(true);
    setMenuPositionY(0);
    document.body.style.overflow = "hidden";
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragStartY) return;
    const touchY = e.touches[0].clientY;
    const distanceDragged = touchY - dragStartY;

    if (distanceDragged > 0) {
      setMenuPositionY(
        Math.min(distanceDragged, menuRef.current!.offsetHeight)
      );
    }
  };

  const handleTouchEnd = () => {
    if (menuPositionY > menuRef.current!.offsetHeight / 3) {
      handleCloseMenu();
    } else {
      setMenuPositionY(0);
    }
    setDragStartY(null);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const redirectHandler = () => {
    router.push("/register");
  };

  const navItem = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Matches & Table", href: "/mach&table" },
    { id: 3, name: "Rules", href: "/rules" },
    { id: 4, name: "Stadium", href: "/stadium" },
  ];

  return (
    <>
      {/* desktop */}
      <ul className={styles.desktop}>
        {navItem.map((item) => (
          <li key={item.id} className={inter.className}>
            <Link
              href={item.href}
              className={`${styles.navItem} ${
                path === item.href ? styles.active : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}

        <OutlineButton
          onClick={redirectHandler}
          label="Register"
          icon={<Arrow color="#f8f8f8" />}
        />
      </ul>
      {/* mobile */}
      <div className={styles.mobile}>
        <div onClick={handleBurgerClick}>
          <Burger className={styles.burgerIcon} />
        </div>
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <div
              className={styles.menu}
              ref={menuRef}
              tabIndex={-1}
              style={{
                transform: `translateY(${menuPositionY}px)`,
                transition:
                  menuPositionY === 0 ? "transform 0.3s ease" : "none",
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className={styles.closeButton} onClick={handleCloseMenu}>
                <CloseMenu />
              </div>

              <ul className={styles.menuList}>
                {navItem.map((item) => (
                  <li className={inter.className} key={item.id}>
                    <Link
                      href={item.href}
                      className={`${styles.mobLink} ${
                        path === item.href ? styles.active : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <OutlineButton
                  onClick={redirectHandler}
                  label="Register"
                  icon={<Arrow color="#f8f8f8" />}
                />
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavItem;
