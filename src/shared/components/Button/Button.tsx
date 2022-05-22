import React, { ReactElement } from "react";

import styles from "./Button.module.css";

export type ButtonProps = {
  className?: string,
  onClick?: () => void,
  children: ReactElement<any, any>,
  type?: "button" | "submit" | "reset",
}

export const Button = ({ children, onClick, className, ...rest }: ButtonProps) => {

  return (
    <button {...rest} className={[styles['Button'], className].join(' ')} onClick={onClick}>
        {children}
    </button>
  )
}
