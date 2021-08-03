import * as Yup from 'yup';

const Schema = Yup.object().shape({
    login: Yup.string()
        .required('Введите Email или номер телефона'),
    password: Yup.string()
        .required('Введите пароль'),
});

export default Schema;
