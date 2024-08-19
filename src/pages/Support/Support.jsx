import "./Support.css";
import { Formik } from "formik";

import { SendData } from "../../hooks/fetchData";
import { CircularProgress, Icon, Input } from "@mui/material";
import { supportSchema } from "../../hooks/dataTools";
import { useState } from "react";
import { green } from "@mui/material/colors";



export default function Support() {
  const [sbmitSuccess, setSuccess] = useState(false)
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
              let data =
                "<a><strong>" +
                "Заявка в поддержку" +
                "</strong></a>" +
                "%0A%0A" +
                values.name +
                "%0A" +
                values.phone +
                "%0A" +
                values.comment;
              // eslint-disable-next-line no-unused-vars
              const response = SendData(data).then((res) => {
                console.log(res.status);
                setSubmitting(false);
                setSuccess(true)
              });

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
                disabled={isSubmitting || sbmitSuccess}
              />

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
                disabled={isSubmitting || sbmitSuccess}
              />
              <textarea
                disabled={isSubmitting || sbmitSuccess}
                type="text"
                rows={5}
                placeholder="Ваш комментарий"
                name={"comment"}
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {isSubmitting && <div><CircularProgress /></div>}
              {sbmitSuccess ? (
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Icon sx={{ color: green[500], fontSize: '40px' }}>done</Icon>
                  <p>Успешно отправлено</p>
                </div>
              ) : false}
              <div style={{ color: "#ff0000" }}>
                <p>{errors.name}</p>
                <p>{errors.phone}</p>
              </div>

              <button type="submit" disabled={isSubmitting || sbmitSuccess}>
                ОТПРАВИТЬ
              </button>
            </form>
          )}
        </Formik>
      </section>
    </main>
  );
}
