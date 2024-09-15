import { useSelector } from "react-redux"



const FormikInfo = () => {
    const guestName = useSelector(state => state.formikInfo.name)
    
    
    
    return (
        <div>
            <p>Hello, { guestName}</p>
        </div>
    )
}

export default FormikInfo