import './SelectPackage.css'
import { Icon, Modal, Select, CircularProgress } from '@mui/material'
import { Formik } from 'formik';
import { Input } from "@mui/material";
import { cardsContentCommon, cardsContentBussy } from '../../popular-rates/rates-data'
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { SendData } from '../../../../hooks/fetchData';
import { packageSchema } from '../../../../hooks/dataTools';
import { green } from '@mui/material/colors';


export default function SelectPackage(props) {

    const packagesData = cardsContentCommon.concat(cardsContentBussy)
    const [sbmitSuccess, setSuccess] = useState(false)


    return (<Modal open={props.open}
        onClose={props.onClose}>
        <div className="SelectPackdge">
            <h2>Заявка на подключение</h2>

            <Formik
                initialValues={{ name: "", phone: "", addres: "", package: packagesData[0].title }}
                validationSchema={packageSchema}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        let data =
                            "<a><strong>" +
                            "Заявка на подключение" +
                            "</strong></a>" +
                            "%0A%0A" +
                            values.name +
                            "%0A" +
                            values.phone +
                            "%0A" +
                            values.addres +
                            "%0A" +
                            values.package;
                        const response = SendData(data).then((res) => {
                            console.log(res.status);
                            setSubmitting(false);
                            setSuccess(true)
                        });
                    }, 2000);
                }}

            >

                {
                    ({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting, }
                    ) => (

                        < form className='SelectPackageForm' onSubmit={handleSubmit} >
                            {
                                console.log(isSubmitting)}
                            <Input
                                disabled={sbmitSuccess || isSubmitting}
                                placeholder='ФИО'
                                type='text'
                                name='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.name && true}
                            />
                            <Input
                                disabled={sbmitSuccess || isSubmitting}
                                placeholder='77712345'
                                type='text'
                                name='phone'
                                onChange={handleChange}
                                onBlur={() => {
                                    values.phone = values.phone
                                        .replace(/\D/g, "")
                                        .replace(/^(3730|373|0)/, "");

                                }}
                                error={errors.phone && true}
                            />

                            <Input
                                disabled={sbmitSuccess || isSubmitting}
                                placeholder="Адрес"
                                type='text'
                                name='addres'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.addres && true}
                            />

                            <Select
                                disabled={sbmitSuccess || isSubmitting}
                                name='package'
                                value={values.package}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.package && true}
                            >
                                {packagesData.map((pack, index) => {
                                    return (
                                        <MenuItem value={pack.title} key={index}>
                                            {pack.title}
                                        </MenuItem>
                                    )
                                })}
                            </Select >
                            {isSubmitting && <div><CircularProgress /></div>}
                            <div style={{ color: "#ff0000" }}>
                                <p>{errors.name}</p>
                                <p>{errors.phone}</p>
                                <p>{errors.addres}</p>
                            </div>

                            {sbmitSuccess ? (
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <Icon sx={{ color: green[500], fontSize: '40px' }}>done</Icon>
                                    <p>Успешно отправлено</p>
                                </div>
                            ) : false}

                            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', }}>
                                <button type="submit" disabled={isSubmitting || sbmitSuccess}>Отправить</button>
                                <button onClick={() => { props.onClose() }}>Закрыть</button>
                            </div>
                        </form>
                    )
                }
            </Formik>
        </div>
    </Modal >)
}