"use client";
import React, { useState } from "react";
import styles from "./Select.module.scss";
import ArrowUp from "../../icon/ArrowUp";
import ArrowDown from "../../icon/ArrowDown";
import CheckCircle from "../../icon/CheckCircle";

interface Option {
  value: string;
  label: string;
}

const Select: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const options: Option[] = [
    { value: "sporthalle_1", label: "Sporthalle Viktring Klagenfurt" },
    { value: "stadthalle_2", label: "Stadthalle Steyr" },
    { value: "stadium_3", label: "Another Stadium" },
    { value: "stadium_4", label: "Yet Another Stadium" },
  ];

  const handleOptionClick = (option: Option): void => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor="stadium">Stadium</label>
      <div
        className={styles.selectBox}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={styles.selectedOption}>
          {selectedOption ? selectedOption.label : "Choose a stadium"}
        </div>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </div>
      {isOpen && (
        <ul className={styles.optionsList}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`${styles.option} ${
                selectedOption?.value === option.value ? styles.selected : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <span> {option.label}</span>
              {selectedOption?.value === option.value ? <CheckCircle /> : ""}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
