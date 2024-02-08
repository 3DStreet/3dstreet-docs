import React from "react";
import clsx from "clsx";
import styles from "./button.module.css";

const Button = ({
  variant,
  label,
  icon,
  isActive,
  link,
  disabled,
  type,
  onClick,
}) => {
  return (
    <button
      tabIndex={0}
      role={link ? "link" : "button"}
      onClick={(e) => onClick(e)}
      disabled={disabled}
      type={type}
      className={clsx(
        styles.wrapper,
        styles[`variant-${variant}`],
        isActive && styles.active,
        disabled && styles.disabled
      )}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      {label}
    </button>
  );
};

export { Button };
