import React from "react";
import { useField } from "formik";

import styles from "./TextInput.module.css";

export type TextInputProps = {
  label?: string,
  name: string,
  placeholder?: string,
  type: string,
  className?: string,
  classNameError?: string,
  required?: boolean
}

export const TextInput = ({ className, classNameError, placeholder,...props }: TextInputProps) => {
  const [field, meta] = useField(props);

  return (
    <>
    <div className={styles['TextInput-Container']}>
      <input {...field} {...props} className={[styles['TextInput'], className].join(' ')}/>
      {placeholder && !field.value && <label className={styles['TextInput-Label']} htmlFor={props.name}>{placeholder}</label>}
    </div>
      {meta.touched && meta.error ? (
        <div className={[styles['TextInput-Error'], classNameError].join(' ')}>{meta.error}</div>
      ) : null}
    </>
  );
}
