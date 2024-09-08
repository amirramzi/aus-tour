"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./Select.module.scss";
import ArrowUp from "../../icon/ArrowUp";
import ArrowDown from "../../icon/ArrowDown";
import CheckCircle from "../../icon/CheckCircle";

interface Option {
  value: string;
}

interface SelectProps {
  options: Option[];
  label: string;
  name: string;
  onChange: (value: string) => void;
  value: string;
  onBlur: (e: React.FocusEvent<any>) => void; 
  error?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  label,
  name,
  onChange,
  value,
  onBlur,
  error,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options.find((option) => option.value === value) || null
  );
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: Option): void => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
      triggerBlur(); 
    }
  };

  const triggerBlur = () => {
   
    const event = {
      target: {
        name, 
      },
    } as React.FocusEvent<any>;

    onBlur(event); 
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.wrapper} ref={selectRef}>
        <label htmlFor={name}>{label}</label>
        <div
          className={`${styles.selectBox} ${error ? styles.errorSelect : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          onBlur={triggerBlur} 
        >
          <div className={styles.selectedOption}>
            {selectedOption ? (
              selectedOption.value
            ) : (
              <span>Choose an option</span>
            )}
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
                <span>{option.value}</span>
                {selectedOption?.value === option.value && <CheckCircle />}
              </li>
            ))}
          </ul>
        )}
        {error && <div className={styles.errorMessage}>{error}</div>}
      </div>
    </>
  );
};

export default Select;
