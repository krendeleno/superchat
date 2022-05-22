import React from "react";
import { useField } from "formik";

import styles from "./TextInput.module.css";

export type TextInputProps = {
  label?: string,
  name: string,
  placeholder?: string,
  type: string,
  className?: string,
}

export const TextInput = ({ label, className, ...props }: TextInputProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      {label && <label htmlFor={props.name}>{label}</label>}
      <input {...field} {...props} className={[styles['TextInput'], className].join(' ')}/>
      {meta.touched && meta.error ? (
        <div className={styles['TextInput-Error']}>{meta.error}</div>
      ) : null}
    </>
  );
}
