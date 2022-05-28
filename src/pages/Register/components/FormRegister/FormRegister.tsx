import React from "react";
import { observer } from "mobx-react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Button } from "src/shared/components/Button";
import { TextInput } from "src/shared/components/TextInput";
import SvgLogo from "src/assets/Logo";

import styles from "./FormRegister.module.css";

export const FormRegister = observer(()  => {
  let navigate = useNavigate();

  const register = (event: Event) => {
    event.preventDefault();
    navigate("/");
  }

  return (
    <div className={styles['FormRegister']}>
      <SvgLogo />
      <Formik
        initialValues={{ login: "", password: "", repeatPassword: ""}}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          login: Yup.string()
            .required('Обязательное поле'),
          password: Yup.string()
            .required('Обязательное поле'),
          passwordRepeat: Yup.string()
            .oneOf([Yup.ref('password')], 'Пароли не совпадают')
            .required('Обязательное поле'),
        })}
      >
        {props => (
          <Form className={styles['FormRegister-Form']}>
            <TextInput name="login" type="text" className={styles['FormRegister-Input']} placeholder="логин"/>
            <TextInput name="password" type="text" className={styles['FormRegister-Input']} placeholder="пароль"/>
            <TextInput name="passwordRepeat" type="text" className={styles['FormRegister-Input']} placeholder="пароль еще раз"/>
            <Button className={styles['FormRegister-ButtonRegister']} type="submit" onClick={register}>
              <span>зарегистрироваться</span>
            </Button>
          </Form>
        )}
      </Formik>
      <Link to="../login" className={styles['FormRegister-Enter']}><span>войти</span></Link>
    </div>
  )
});