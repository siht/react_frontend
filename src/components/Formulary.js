import React from 'react'
import { Formik, Form, Field } from 'formik';

function Formulary(props) {
    return (
        <div className="post-form">
            <Formik
                initialValues={{ nombre: '', titulo: '', imagen: '' }}
                onSubmit={(values, {setSubmitting}) => {

                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type="text" name="nombre" />
                        <Field type="text" name="titulo" />
                        <Field type="file" name="imagen" />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Formulary