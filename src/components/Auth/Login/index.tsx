import './style.scss';
import Schema from './validateSchema';
import {Form, Formik} from 'formik';
import Button from '@components/UI/Button';
import Input from '@components/UI/Input';

const Login = () => {
    return (
        <div className="registry">
            <span className="title">Войти в Твиттер</span>
            <Formik
                initialValues={{
                    login: '',
                    password: ''
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
                      handleChange,
                      handleBlur
                  }) => (
                    <Form>
                        <Input
                            name="login"
                            placeholder="Email или номер телефона"
                            value={values.login}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.login && touched.login ? errors.login : ''}
                        />
                        <Input
                            name="password"
                            placeholder="Пароль"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.password && touched.password ? errors.password : ''}
                        />
                        <Button
                            style={{marginTop: '20px'}}
                            title="Войти"
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
