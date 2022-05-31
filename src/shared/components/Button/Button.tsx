import React, { ReactElement, useContext } from "react";
import styles from "./Button.module.css";
import { ThemeContext } from "src/shared/themes";

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
