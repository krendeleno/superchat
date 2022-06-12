import React from "react";

import { FormLogin } from "src/pages/Login/components/FormLogin";
import { Helmet } from "react-helmet";

import styles from "./Login.module.css";

export function Login() {
  return (
    <div className={styles["Login"]}>
      <Helmet>
        <title>24chat - Вход</title>
        <meta name="description" content="Вход" />
      </Helmet>
      <FormLogin />
    </div>
  );
}
