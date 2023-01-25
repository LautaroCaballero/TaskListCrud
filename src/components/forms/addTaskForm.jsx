import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import { ROLES } from '../../models/roles.enum';


const AddTaskForm = () => {
    let task = new Task();
    const initialValues = {
        name : '',
        description : '',
        completed : false,
        level: LEVELS.NORMAL
    }

    const addTaskSchema = yup.object().shape(
        {
            name: yup.string()
                .required('Task name required'),
            description: yup.string()
                .required('Task description required'),
            level: yup.string()
                .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select one level')
        }
    )
    
    const submit = () => {
        alert('Register user')
    }

    return (
        <div>
            <h4>Add New Task</h4>
            <Formik
                initialValues = {initialValues}
                validationSchema = {addTaskSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('tasks', values)
                }}
            >
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="name">Task name</label>
                            <Field id="name" name="name" placeholder="Task Name" />
                            {
                                errors.name && touched.name && (
                                        <ErrorMessage component='div' name='name'/>
                                )
                            }
                            <label htmlFor="description">Task description</label>
                            <Field id="description" name="description" placeholder="Task Description" />
                            {
                                errors.description && touched.description && (
                                        <ErrorMessage component='div' name='description'/>
                                )
                            }
                            <button type="submit">Register Account</button>
                            {isSubmitting ? (<p>Sending your credentials...</p>) : null}
                        </Form>
                    )}
            </Formik>
        </div>
    );
}

export default AddTaskForm;
