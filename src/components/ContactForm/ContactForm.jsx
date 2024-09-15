
import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react'

const initialState = {
    name: "",
    number: ""
}

const contactForm = () => {
    // const dispatch = useDispatch();


    const onSubmit = (values, actions) => {
        console.log(values);
        
        actions.resetForm();
    }
    return (
        <div>
            <Formik
                initialValues={initialState} onSubmit={onSubmit} >
                <Form>
                    <Field type="text" name="name" />
                    <Field type="tel" name="number" />
                    <button type="submit">add contact</button>
                </Form>
            </Formik>
        </div>
    )
}

export default contactForm