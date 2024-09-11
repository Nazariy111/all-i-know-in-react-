import { Field, Form, Formik } from "formik"
import css from './FormikComponent.module.css'
import { useId, useState } from "react";
import { Link, Outlet } from "react-router-dom";


const initialValues = {
    name: "",
    email: "",
    message: "",
    level: "",
    color: "",
};

const FormikComponent = () => {
    const [myColor, setMyColor] = useState("black");
    const [isInfo, setIsInfo] = useState(false);

    const textareaId = useId();
    const selectId = useId();
    const radioId = useId();

    const handleSubmit = (values, actions) => {
        console.log({ ...values, color: myColor });
        setIsInfo(true);
        actions.resetForm();
    };

    const handleColorChange = (e) => {
        e.preventDefault();
        setMyColor(e.target.value)

    };


    return (
        <div className={css.mainFormikContainer}>
            <h3 className={css.title}>FORMIK</h3>
            <Formik initialValues={{...initialValues, color: myColor} } onSubmit={handleSubmit}>
                <Form className={css.mainContainer}>
                    <div className={css.mainContainer}>
                        <Field type='text' name='name' placeholder="your name" />
                        <Field type='email' name="email" placeholder="your email" />
                    </div>

                    <div className={css.mainContainer}>
                        <label htmlFor={textareaId}>your message</label>
                        <Field as='textarea' name='message' id={textareaId}/>
                    </div>

                    <div className={css.mainContainer}>
                        <label htmlFor={selectId}>choose your level</label>
                        <Field as="select" name="level" id={selectId}>
                            <option value="easy">Easy</option>
                            <option value="normal">Normal</option>
                            <option value="hard">Hard</option>
                        </Field>
                    </div>

                    <div>
                        <p style={{color: myColor}}>choose your color</p>
                        <label >
                            <Field type="radio" value="red" name="color" onChange={handleColorChange} />
                            red
                        </label>
                        <label >
                            <Field type="radio" value="green" name="color" onChange={handleColorChange}/>
                            green
                        </label>
                        <label >
                            <Field type="radio" value="blue" name="color" onChange={ handleColorChange}/>
                            blue
                        </label>
                        

                    </div>

                    <button type='submit'>Submit</button>

                </Form>
            </Formik>
            
            {isInfo &&
                <div>
                    <Link to="redux-state">redux</Link>
                    
                </div>}
            <Outlet />
        </div>
    )
}

export default FormikComponent