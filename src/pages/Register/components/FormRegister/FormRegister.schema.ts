import * as Yup from "yup";

export const schema = Yup.object({
  login: Yup.string().required("Обязательное поле"),
  password: Yup.string().required("Обязательное поле"),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref("password")], "Пароли не совпадают")
    .required("Обязательное поле"),
});
