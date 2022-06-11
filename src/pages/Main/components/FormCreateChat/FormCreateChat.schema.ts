import * as Yup from "yup";

export const schema = Yup.object({
  title: Yup.string().required("Обязательное поле"),
  colorTheme: Yup.string()
    .oneOf(["blue", "red", "blue", "green"], "Не выбран цвет")
    .required("Обязательное поле"),
  tags: Yup.array(),
  tagsProvider: Yup.string()
    .min(3, "Длина тега должна быть хотя бы 3 символа")
    .transform((value) => (!!value ? value : null))
    .test(
      "unique",
      "Такой тег уже есть в вашем списке",
      (value, context) =>
        // @ts-ignore
        !context.resolve(Yup.ref("tags")).includes(value)
    ),
});
