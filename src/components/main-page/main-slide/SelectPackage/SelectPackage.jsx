import './SelectPackage.css'
import { Modal, Select } from '@mui/material'
import { Formik } from 'formik';
import { Input } from "@mui/material";
import { cardsContentCommon, cardsContentBussy } from '../../popular-rates/rates-data'




export default function SelectPackage(props) {
    return (<Modal open={props.open}
        onClose={props.onClose}>
        <div className="SelectPackdge">
            <h2>Заявка на подключение</h2>
            <Formik initialValues={{ name: "", phone: "", addres: "", package: [] }}>
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

                        < form className='SelectPackageForm'>
                            {console.log(values)}
                            <Input
                                placeholder='ФИО'
                                type='text'
                                name='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.name && true}
                            />

                            <Input
                                placeholder='77712345'
                                type='number'
                                name='phone'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.phone && true}
                            />

                            <Input
                                placeholder="Адрес"
                                type='text'
                                name='addres'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.addres && true}
                            />

                            <Select
                                placeholder={cardsContentBussy[1].title}
                            >
                                <optgroup label='Для дома'>
                                    {cardsContentCommon.map((itm, i) => {
                                        return (
                                            <option value={i}>
                                                {itm.title}
                                            </option>)
                                    })}
                                </optgroup>
                                <optgroup label='Для бизнеса'></optgroup>
                            </Select>
                            <button>Отправить</button>
                        </form>
                    )
                }
            </Formik>
        </div>
    </Modal >)
}