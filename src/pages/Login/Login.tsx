import React from "react";

import { FormLogin } from "src/pages/Login/components/FormLogin";

import styles from "./Login.module.css";

export function Login() {

  return (
    <div className={styles["Login"]}>
      <FormLogin />
    </div>
  );
}
