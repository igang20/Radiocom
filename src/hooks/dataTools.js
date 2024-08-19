import * as yup from "yup";

export const supportSchema = yup.object().shape({
  phone: yup
    .string()
    .max(8, "Номер должен содержать 8 символов")
    .required("Введите номер телефона")
    .matches(
      new RegExp(`^(774|775|777|778|779|533|219|557)[0-9]{5}$`),
      "Введите корректный номер телефона"
    ),
  name: yup
    .string()
    .matches(
      new RegExp(
        `^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?(\\s[А-ЯЁ]{1}[а-яё]{0,})?(\\s[А-ЯЁ]{1}[а-яё]{0,})?$`
      ),
      "Введите корректное ФИО"
    )
    .required("Введите ФИО"),
});

export const packageSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      new RegExp(
        `^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?(\\s[А-ЯЁ]{1}[а-яё]{0,})?(\\s[А-ЯЁ]{1}[а-яё]{0,})?$`
      ),
      "Введите корректное ФИО"
    )
    .required("Введите ФИО"),
  phone: yup
    .string()
    .max(8, "Номер должен содержать 8 символов")
    .required("Введите номер телефона")
    .matches(
      new RegExp(`^(774|775|777|778|779|533|219|557)[0-9]{5}$`),
      "Введите корректный номер телефона"
    ),
  addres: yup.string().required("Введете адрес"),
  package: yup.string().required(),
});
