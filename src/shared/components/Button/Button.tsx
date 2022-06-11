import React, { ReactElement, useContext } from "react";

import { ThemeContext } from "src/shared/themes";

import styles from "./Button.module.css";

export type ButtonProps = {
  className?: string;
  onClick?: (arg0: any) => void;
  children: ReactElement<any, any>;
  type?: "button" | "submit" | "reset";
  style?: any;
};

export const Button = ({
  children,
  onClick,
  className,
  ...rest
}: ButtonProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={[styles["Button"], className].join(" ")}
      onClick={onClick}
      style={{ background: theme.button }}
      {...rest}
    >
      {children}
    </button>
  );
};
