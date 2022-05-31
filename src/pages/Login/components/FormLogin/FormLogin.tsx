import React, { useContext } from "react";
import { observer } from "mobx-react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button } from "src/shared/components/Button";
import { TextInput } from "src/shared/components/TextInput";
import SvgLogo from "src/assets/Logo";

import styles from "./FormLogin.module.css";
import { ThemeContext } from "src/shared/themes";

export const FormLogin = observer(() => {
  let navigate = useNavigate();

  const login = (event: Event) => {
    event.preventDefault();
    navigate("/");
  };
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={styles["FormLogin"]}
      style={{ backgroundColor: theme.form }}
    >
      <div className={styles["FormLogin-Wrapper"]}>
        <SvgLogo color={theme.logo} />
        <Formik
          initialValues={{ login: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
          validationSchema={Yup.object({
            login: Yup.string().required("Обязательное поле"),
            password: Yup.string().required("Обязательное поле"),
          })}
        >
          {(props) => (
            <Form
              className={styles["FormLogin-Form"]}
              style={{ backgroundColor: theme.form }}
            >
              <TextInput
                name="login"
                type="text"
                className={styles["FormLogin-Input"]}
                placeholder="логин"
              />
              <TextInput
                name="password"
                type="text"
                className={styles["FormLogin-Input"]}
                placeholder="пароль"
              />
              <Button
                className={styles["FormLogin-ButtonLogin"]}
                type="submit"
                onClick={login}
              >
                <span style={{ color: theme.buttonText }}>войти</span>
              </Button>
            </Form>
          )}
        </Formik>
        <Link
          to="../register"
          className={styles["FormLogin-Register"]}
          style={{ textDecorationColor: theme.text }}
        >
          <span style={{ color: theme.text }}>зарегистрироваться</span>
        </Link>
      </div>
    </div>
  );
});
