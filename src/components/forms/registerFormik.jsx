import React from 'react';
import { User } from '../../models/user.class';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { ROLES } from '../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();
    const initialValues = {
        username : '',
        email : '',
        password : '',
        confirm : '', 
        role : ROLES.USER
    }

    const registerSchema = yup.object().shape(
        {
            username: yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            role: yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
                .required('Role is required'),
            password: yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: yup.string()
                .oneOf([yup.ref('password'), null], 'Passwords must match')
                .required('You must confirm the password')
        }
    )

    const submit = () => {
        alert('Register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues = {initialValues}
                validationSchema = {registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', values)
                }}
            >
            {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="username">User name</label>
                            <Field id="username" name="username" placeholder="Username" />
                            {
                                errors.username && touched.username && (
                                        <ErrorMessage component='div' name='username'/>
                                )
                            }

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

                            <label htmlFor='confirm'>Confirm password</label>
                            <Field 
                                id='confirm'
                                name= 'confirm'
                                placeholder = 'confirm password'
                                type = 'password'
                            />

                            {
                                    errors.confirm && touched.confirm && 
                                    (
                                        <ErrorMessage name='confirm' component='div'></ErrorMessage>
                                    )
                            }

                            <button type="submit">Add task</button>
                            {isSubmitting ? (<p>Sending your task...</p>) : null}
                            
                        </Form>
                    )}
            </Formik>
        </div>
    );
}

export default RegisterFormik;
