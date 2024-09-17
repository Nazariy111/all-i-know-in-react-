
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/httpRedux/httpReduxOperations';
import * as Yup from "yup";
import css from './ContactForm.module.css';
import { useId } from 'react';

const initialState = {
    name: "",
    number: ""
};

const contactValidationSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(2, "Too Short!")
        .max(15, "Too Long!")
        .required("Required"),
    number: Yup
        .string()
        .matches(/^\d{3}-\d{3}-\d{4}$/, 'Sorry! The phone number format is XXX-XXX-XXXX')
        .required("Sorry! Phone number is required"),
});

// =================================================================

const ContactForm = () => {
    const dispatch = useDispatch();
    const nameId = useId();
    const numberId = useId()


    const onSubmit = (values, actions) => {
        console.log(values);
        dispatch(addContact(values));
        actions.resetForm();
    }


    return (
        <div className={css.container}>
            <Formik
                
                initialValues={initialState}
                validationSchema={contactValidationSchema}
                onSubmit={onSubmit}>
                <Form className={css.container}>
                    <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId} />
                    <ErrorMessage component="p" name="name"/>

                    <label htmlFor={numberId}>Number</label>
                    <Field type="tel" name="number" id={numberId} />
                    <ErrorMessage component='p' name="number"/>

                    <button type="submit" className={css.contactBtn}>add contact</button>
                </Form>
            </Formik>
        </div>
    )
}

export default ContactForm