import React, { useState } from "react";
import styles from "./input.module.css";
import { CheckIcon, MailIcon } from "../../icons";
import { Button } from "../button";
import clsx from "clsx";
import { useIsMobile } from "../../hooks/isMobile.hook";

const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Input = () => {
  const [value, setValue] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [isSent, setIsSent] = useState(false);

  const { isMobile } = useIsMobile();

  const onChangeHandler = (value) => {
    setValue(value);

    if (!isEmail) {
      setIsEmail(true);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!isSent) {
      const isEmailValid = EMAIL_REGEXP.test(value);

      if (!isEmailValid) {
        return setIsEmail(isEmailValid);
      }
      setIsSent(true);

      // TODO: callback to receive user email to send mails
    }
  };

  return (
    <form className={styles.wrapper}>
      <p className={styles.label}>
        Get the latest staff picks and insider updates monthly.
      </p>
      <div className={styles.formWrapper}>
        <div className={clsx(styles.inputWrapper, !isEmail && styles.notValid)}>
          <MailIcon />
          <input
            placeholder={`Enter your email ${
              !isMobile ? "address to register for updates" : ""
            }`}
            className={styles.input}
            type="email"
            value={value}
            onChange={({ currentTarget: { value } }) => onChangeHandler(value)}
          />
        </div>
        <Button
          disabled={!value || !isEmail}
          label={isSent ? "Subscribed" : "Keep me updated"}
          variant={"transparent"}
          type={"submit"}
          onClick={(e) => onSubmitHandler(e)}
          icon={isSent ? <CheckIcon /> : undefined}
          isActive={undefined}
          link={undefined}
        />
      </div>
    </form>
  );
};

export { Input };
