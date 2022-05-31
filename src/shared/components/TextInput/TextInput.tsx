import React, { useContext } from "react";
import { useField } from "formik";

import styles from "./TextInput.module.css";
import { ThemeContext } from "src/shared/themes";

export type TextInputProps = {
  label?: string;
  name: string;
  placeholder?: string;
  type: string;
  className?: string;
  classNameError?: string;
  required?: boolean;
};

export const TextInput = ({
  className,
  classNameError,
  placeholder,
  ...props
}: TextInputProps) => {
  const [field, meta] = useField(props);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={styles["TextInput-Container"]}>
        <input
          {...field}
          {...props}
          className={[styles["TextInput"], className].join(" ")}
          style={{ borderBottom: `1px solid ${theme.line}`, color: theme.text }}
        />
        {placeholder && !field.value && (
          <label className={styles["TextInput-Label"]} htmlFor={props.name}>
            {placeholder}
          </label>
        )}
      </div>
      {meta.touched && meta.error ? (
        <div className={[styles["TextInput-Error"], classNameError].join(" ")}>
          {meta.error}
        </div>
      ) : null}
    </>
  );
};
