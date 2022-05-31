import React from "react";

import { FormRegister } from "src/pages/Register/components/FormRegister";

import styles from "./Register.module.css";

export function Register() {
  return (
    <div className={styles["Register"]}>
      <FormRegister />
    </div>
  );
}
