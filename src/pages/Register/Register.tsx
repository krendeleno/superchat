import React from "react";
import { Helmet } from "react-helmet";

import { FormRegister } from "src/pages/Register/components/FormRegister";

import styles from "./Register.module.css";

export function Register() {
  return (
    <div className={styles["Register"]}>
      <Helmet>
        <title>24chat - Регистрация</title>
        <meta name="description" content="Регистрация" />
      </Helmet>
      <FormRegister />
    </div>
  );
}
