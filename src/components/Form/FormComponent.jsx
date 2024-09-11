import toast from 'react-hot-toast';
import css from './FormComponent.module.css'
import { useId, useState } from 'react'

const FormComponent = () => {

    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const nameId = useId();
    const emailId = useId();
    const selectId = useId();
    const radioBtnId1 = useId();
    const radioBtnId2 = useId();
    const radioBtnId3 = useId();
    const textareaId = useId();
    const checkboxBtnId1 = useId();
    const checkboxBtnId2 = useId();
    const checkboxBtnId3 = useId();

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setSelectedCheckboxes((prev) => [...prev, value]);
        } else {
            setSelectedCheckboxes((prev) => prev.filter((item) => item !== value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const { name, email, way, status, userMessage } = form.elements;
        console.log(name.value, email.value, way.value, status.value, selectedCheckboxes, userMessage.value);
        toast.success(`hi, ${name.value} 
            email: ${email.value}
            your way - ${way.value}
            you are ${status.value}
            your number(s): ${selectedCheckboxes}
            your message: ${userMessage.value}`
        )
        form.reset();
    }

    return (
        <div className={css.formContainer}>
            <h3 className={css.title}>FORM</h3>
            <form className={css.form} onSubmit={handleSubmit}>

                <div className={css.inputContainer}>
                    <label htmlFor={nameId}>your name</label>
                    <input type="text" name="name" id={nameId} />
                    <label htmlFor={emailId}>your email</label>
                    <input type="email" name="email" id={emailId} />
                </div>

                <div className={css.selectContainer}>
                    <label htmlFor="selectId">choose your way:  </label>
                    <select name="way" id="selectId">
                        <option value="left">on the left</option>
                        <option value="straight" >go straight</option>
                        <option value="right">on the right</option>
                    </select>
                </div>

                <div className={css.radioContainer}>
                    <p>Choose your status</p>
                    <label htmlFor="radioBtnId1">
                        <input type="radio" id='radioBtnId1' name='status' value="baby" />
                        baby
                    </label>
                    <label htmlFor="radioBtnId2">
                        <input type="radio" id='radioBtnId2' name='status' value="young" defaultChecked/>
                        young
                    </label>
                    <label htmlFor="radioBtnId3">
                        <input type="radio" id='radioBtnId3' name='status' value="old" />
                        old
                    </label>
                    
                </div>

                <div className={css.checkboxContainer}>
                    <p>Choose your number</p>
                    <label htmlFor="checkboxBtnId1">
                        <input type="checkbox" id='checkboxBtnId1' name='number' value="one" onChange={handleCheckboxChange} />
                        1
                    </label>
                    <label htmlFor="checkboxBtnId2">
                        <input type="checkbox" id='checkboxBtnId2' name='number' value="two" onChange={handleCheckboxChange} />
                        2
                    </label>
                    <label htmlFor="checkboxBtnId3">
                        <input type="checkbox" id='checkboxBtnId3' name='number' value="three" onChange={handleCheckboxChange} />
                        3
                    </label>
                    
                </div>
                

                <div className={css.textareaContainer}>
                    <label htmlFor={textareaId}>write smth</label>
                    <textarea name="userMessage" id={textareaId}></textarea>
                </div>

                <button type='submit'>submit</button>

                
            </form>
        </div>
    )
}

export default FormComponent