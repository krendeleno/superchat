import React, { ReactElement } from "react";

import styles from "./Button.module.css";

export type ButtonProps = {
  className?: string,
  onClick?: (arg0: any) => void,
  children: ReactElement<any, any>,
  type?: "button" | "submit" | "reset",
  style?: any
}

export const Button = ({ children, onClick, className, ...rest }: ButtonProps) => {

  return (
    <button {...rest} className={[styles['Button'], className].join(' ')} onClick={onClick}>
        {children}
    </button>
  )
}
