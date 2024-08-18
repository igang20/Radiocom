import "./Support.css";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { SendData } from "../../hooks/fetchData";
import { Input } from "@mui/material";

export default function Support() {
  const supportSchema = yup.object().shape({
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
      .required("Это поле обязательно"),
  });
  return (
    <main>
      <section className="support-block">
        <h1 className="support-heading">
          Заявка в техническую
          <br />
          поддержку
        </h1>
        <Formik
          initialValues={{ name: "", phone: "", comment: "" }}
          validationSchema={supportSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              const responcce = SendData(
                `${values.name} 
                ${values.phone}
                 ${values.comment}`
              ).then(res => {
                console.log(res.status)
              });
              values.name = "";
              values.phone = "";
              values.comment = "";
            }, 2000);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="support-form">
              <Input
                fullWidth
                variant="outlined"
                type="text"
                placeholder="ФИО"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name && true}
              />

              {console.log(errors.name)}
              <Input
                error={errors.phone && true}
                fullWidth
                variant="outlined"
                type="text"
                placeholder="Номер телефона"
                name={"phone"}
                onChange={handleChange}
                onBlur={() => {
                  values.phone = values.phone
                    .replace(/\D/g, "")
                    .replace(/^(3730|373|0)/, "");
                  handleBlur;
                }}
                value={values.phone}
              />
              <textarea

                type="text"
                rows={5}
                placeholder="Ваш комментарий"
                name={"comment"}
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div style={{ color: "#ff0000" }}>
                <p>{errors.name}</p>
                <p>{errors.phone}</p>

              </div>
              <button type="submit" disabled={isSubmitting}>
                ОТПРАВИТЬ
              </button>
            </form>
          )}
        </Formik>
      </section>
    </main>
  );
}
