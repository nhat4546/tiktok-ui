import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

function Button(props: ButtonProps) {
  let Compo: any = "button";
  if (props.to) {
    Compo = Link;
  }

  if (props.href) {
    Compo = "a";
  }

  const classNames = clsx(
    {
      [styles.primary]: props.primary,
      [styles.outline]: props.outline,
    },
    styles["button-wrap"],
    [props.classnames]
  );

  return (
    <Compo className={classNames} {...props}>
      {props.children}
    </Compo>
  );
}

export default Button;

interface ButtonProps {
  to?: string;
  href?: string;
  onClick?: (prams: any) => void;
  children: JSX.Element;
  primary?: boolean;
  outline?: boolean;
  classnames?: string;
}
