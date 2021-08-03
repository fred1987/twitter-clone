import './style.scss';
import Schema from './validateSchema';
import {Form, Formik} from 'formik';
import Button from '@components/UI/Button';
import Input from '@components/UI/Input';
import Select from '@components/UI/Select';

const Registry = () => {
    return (
        <div className="registry">
            <span className="title">Создайте учетную запись</span>
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                    month: '',
                    day: '',
                    year: ''
                }}
                validationSchema={Schema}
                onSubmit={(values) => {
                    console.log('next');
                }}
            >
                {({
                      isSubmitting,
                      values,
                      errors,
                      touched,
                      setFieldValue,
                      handleChange,
                      handleBlur
                  }) => (
                    <Form>
                        <Input
                            name="name"
                            placeholder="Имя"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.name && touched.name ? errors.name : ''}
                        />
                        <Input
                            name="phone"
                            placeholder="Телефон"
                            value={values.phone}
                            mask="+7 (###) ###-##-##"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.phone && touched.phone ? errors.phone : ''}
                        />
                        <div className="birthday">
                            <Select
                                name="month"
                                placeholder="Месяц"
                                value={values.month}
                                onChange={handleChange}
                                list={[
                                    {label: 'января', id: '1'},
                                    {label: 'февраля', id: '2'},
                                    {label: 'марта', id: '3'},
                                    {label: 'апреля', id: '4'},
                                    {label: 'мая', id: '5'},
                                    {label: 'июня', id: '6'},
                                    {label: 'июля', id: '7'},
                                    {label: 'августа', id: '8'},
                                    {label: 'сентября', id: '9'},
                                    {label: 'октября', id: '10'},
                                    {label: 'ноября', id: '11'},
                                    {label: 'декабря', id: '12'}
                                ]}
                            />
                            <Select
                                name="day"
                                placeholder="День"
                                value={values.day}
                                onChange={handleChange}
                                list={Array.from({length: 31}, (v, i) => ({label: `${i + 1}`, id: `${i + 1}`}))}
                            />
                            <Select
                                name="year"
                                placeholder="Год"
                                value={values.year}
                                onChange={handleChange}
                                list={Array.from({length: 30}, (v, i) => ({label: `${1980 + i}`, id: `${1980 + i}`}))}
                            />
                        </div>
                        <Button
                            style={{marginTop: '20px'}}
                            title="Далее"
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Registry;
