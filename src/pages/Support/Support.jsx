import "./Support.css";
import { Formik, Field } from "formik";

import { SendData } from "../../hooks/fetchData";
import { Input } from "@mui/material";
import { supportSchema } from "../../hooks/dataTools";

export default function Support() {
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
