import './SelectPackage.css'
import { Icon, Modal, Select, CircularProgress } from '@mui/material'
import { Formik } from 'formik';
import { Input } from "@mui/material";
import { cardsContentCommon } from '../../popular-rates/rates-data'
import MenuItem from '@mui/material/MenuItem';
import { SendData } from '../../../../hooks/fetchData';
import { packageSchema } from '../../../../hooks/dataTools';
import { green } from '@mui/material/colors';
import { useStore } from '../../../../hooks/Zustand';


export default function SelectPackage(props) {
    const myStore = useStore()

    return (<Modal open={props.open}
        onClose={props.onClose}>
        <div className="SelectPackdge">
            <h2>Заявка на подключение</h2>

            <Formik
                initialValues={{ name: "", phone: "", addres: "", package: cardsContentCommon[2].title }}
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
                            myStore.setStatus(true)
                            setSubmitting(false)

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

                            <Input
                                disabled={myStore.submitStatus || isSubmitting}
                                placeholder='ФИО'
                                type='text'
                                name='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.name && true}
                            />
                            <Input
                                disabled={myStore.submitStatus || isSubmitting}
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
                                disabled={myStore.submitStatus || isSubmitting}
                                placeholder="Адрес"
                                type='text'
                                name='addres'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.addres && true}
                            />

                            <Select
                                disabled={myStore.submitStatus || isSubmitting}
                                name='package'
                                value={values.package}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.package && true}
                            >
                                {cardsContentCommon.map((pack, index) => {
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

                            {myStore.submitStatus ? (
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <Icon sx={{ color: green[500], fontSize: '40px' }}>done</Icon>
                                    <p>Успешно отправлено</p>
                                </div>
                            ) : false}

                            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', width: "100%" }}>
                                <button type="submit" disabled={myStore.submitStatus || isSubmitting} style={{ width: '50%' }}>Отправить</button>
                                <button onClick={() => { props.onClose() }} style={{ width: '50%' }}>Закрыть</button>
                            </div>
                        </form>
                    )
                }
            </Formik>
        </div>
    </Modal >)
}