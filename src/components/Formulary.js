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
                        <p>
                            <label htmlFor="nombre">Nombre:</label>
                            <Field type="text" name="nombre" />
                        </p>
                        <p>
                            <label htmlFor="titulo">Título:</label>
                            <Field type="text" name="titulo" />
                        </p>
                        <p>
                            <label htmlFor="imagen">Imagen:</label>
                            <Field type="file" name="imagen" />
                        </p>
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