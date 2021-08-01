import * as Yup from 'yup';

const Schema = Yup.object().shape({
    name: Yup.string()
        .required('Как вас зовут?'),
    phone: Yup.string()
        .matches(/^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, 'Введите правильный номер телефона'),
});

export default Schema;
