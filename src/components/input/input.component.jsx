import React, { useState } from "react";
import styles from "./input.module.css";
import { CheckIcon, MailIcon } from "../../icons";
import { Button } from "../button";
import clsx from "clsx";
import Mailchimp from "react-mailchimp-subscribe";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Input = () => {
  const [value, setValue] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [isSent, setIsSent] = useState(false);

  const { siteConfig } = useDocusaurusContext();

  const onChangeHandler = (value) => {
    setValue(value);

    if (!isEmail) {
      setIsEmail(true);
    }
  };

  const onSubmitHandler = (e, subscribe) => {
    e.preventDefault();

    if (!isSent) {
      const isEmailValid = EMAIL_REGEXP.test(value);

      if (!isEmailValid) {
        return setIsEmail(isEmailValid);
      }
      setIsSent(true);

      subscribe({ EMAIL: value });
    }
  };

  return (
    <Mailchimp
      url={siteConfig.customFields?.mailchimpUrl}
      render={({ subscribe, status }) => (
        <form className={styles.wrapper}>
          <div className={styles.formWrapper}>
            <div
              className={clsx(styles.inputWrapper, !isEmail && styles.notValid)}
            >
              <MailIcon />
              <input
                disabled={status === "success"}
                placeholder={"Enter your email address to register for updates"}
                className={clsx(styles.input)}
                type="email"
                value={value}
                onChange={({ currentTarget: { value } }) =>
                  onChangeHandler(value)
                }
              />
            </div>
            <Button
              disabled={!value || !isEmail || status === "sending"}
              label={isSent ? "Subscribed" : "Keep me updated"}
              variant={"transparent"}
              type={"submit"}
              onClick={(e) => onSubmitHandler(e, subscribe)}
              icon={isSent ? <CheckIcon /> : undefined}
              isActive={undefined}
              link={undefined}
              className={""}
            />
          </div>
        </form>
      )}
    />
  );
};

export { Input };
