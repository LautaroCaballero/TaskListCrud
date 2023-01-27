import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom'


const loginSchema = yup.object().shape({
    email: yup.string()
            .email('Invalid email format')
            .required('Email is required'),
    password: yup.string()
            .required('Password is required')
})

const LoginFormik = () => {

    const navigate = useNavigate()

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik 
                initialValues={ initialCredentials }
                validationSchema={ loginSchema }

                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    await localStorage.setItem('credentials', values);
                    navigate('/profile')
                }}
            >
                
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" placeholder="Youremail@email.com" />

                            {
                                errors.email && touched.email && (
                                        <ErrorMessage component='div' name='email'/>
                                )
                            }

                            
                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="Password"
                                type="password"
                            />

                            {
                                errors.password && touched.password && (
                                    <div>
                                        <ErrorMessage component='div' name='password'/>
                                    </div>
                                )
                            }
                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>Login your credentials...</p>) : null}
                        </Form>

                )}
            </Formik>
        </div>
    );
}

export default LoginFormik;
