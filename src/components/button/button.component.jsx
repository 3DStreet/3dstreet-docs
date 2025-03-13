import React from "react";
import clsx from "clsx";
import styles from "./button.module.css";

const Button = ({
  variant,
  label,
  icon,
  trailingIcon,
  isActive,
  link,
  disabled,
  type,
  onClick,
  className,
  href,
  target,
  rel,
}) => {
  const commonProps = {
    className: clsx(
      styles.wrapper,
      styles[`variant-${variant}`],
      isActive && styles.active,
      disabled && styles.disabled,
      className
    ),
    disabled: disabled,
  };

  const content = (
    <>
      {icon && <div className={styles.icon}>{icon}</div>}
      {label}
      {trailingIcon && <div className={styles.trailingIcon}>{trailingIcon}</div>}
    </>
  );

  // If href is provided, render an anchor tag
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        {...commonProps}
        onClick={onClick ? (e) => onClick(e) : undefined}
      >
        {content}
      </a>
    );
  }

  // Otherwise, render a button
  return (
    <button
      tabIndex={0}
      role={link ? "link" : "button"}
      onClick={onClick ? (e) => onClick(e) : undefined}
      type={type}
      {...commonProps}
    >
      {content}
    </button>
  );
};

export { Button };
