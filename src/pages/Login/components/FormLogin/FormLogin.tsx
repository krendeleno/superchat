import React from "react";
import { observer } from "mobx-react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Button } from "src/shared/components/Button";
import { TextInput } from "src/shared/components/TextInput";
import SvgLogo from "src/assets/Logo";

import styles from "./FormLogin.module.css";

export const FormLogin = observer(()  => {
  let navigate = useNavigate();

  const login = (event: Event) => {
    event.preventDefault();
    navigate("/");
  }

  return (
    <div className={styles['FormLogin']}>
      <SvgLogo />
      <Formik
        initialValues={{ login: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          login: Yup.string()
            .required('Обязательное поле'),
          password: Yup.string()
            .required('Обязательное поле'),
        })}
      >
        {props => (
          <Form className={styles['FormLogin-Form']}>
            <TextInput name="login" type="text" className={styles['FormLogin-Input']} placeholder="логин"/>
            <TextInput name="password" type="text" className={styles['FormLogin-Input']} placeholder="пароль"/>
            <Button className={styles['FormLogin-ButtonLogin']} type="submit" onClick={login}>
              <span>войти</span>
            </Button>
          </Form>
        )}
      </Formik>
      <Link to="../register" className={styles['FormLogin-Register']}><span>зарегистрироваться</span></Link>
    </div>
  )
});
