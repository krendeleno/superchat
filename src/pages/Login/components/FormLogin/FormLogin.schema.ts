import * as Yup from "yup";

export const schema = Yup.object({
  login: Yup.string().required("Обязательное поле"),
  password: Yup.string().required("Обязательное поле"),
})