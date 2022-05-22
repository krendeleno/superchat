import React from "react";
import { observer } from "mobx-react";
import { Field } from 'formik';

import styles from "./RadioButtons.module.css";
import { themes } from "src/shared/constants";
import { ThemeColors } from "src/shared/types";

export type RadioButtonsProps = {
  name: string,
  defaultValues: ThemeColors[],
  className?: string,
}

export const RadioButtons = observer(({name, defaultValues, className}: RadioButtonsProps)  => {
  return (
    <div role="group" aria-labelledby="my-radio-group" className={styles['RadioButtons']}>
      {defaultValues.length && defaultValues.map((value) => (
          <Field name={name} className={className} key={value}>
            {({
                field
              }: any) => (
            <label className={styles['RadioButton-Container']}>
              <div style={{border: field.value === value ? `2px solid ${themes[value].secondary}` : 'none', backgroundColor: themes[value].primary}} className={styles['RadioButtons-Before']}/>
              <input type="radio" {...field} value={value} className={styles['RadioButton-Input']}/>
            </label>
            )}
          </Field>
      ))}
    </div>
  );
});
