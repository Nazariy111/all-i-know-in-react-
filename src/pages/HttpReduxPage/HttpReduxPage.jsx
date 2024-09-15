import { useEffect } from "react";

import { fetchAllContacts } from "../../redux/httpRedux/httpReduxOperations"
import { useDispatch } from "react-redux";


const HttpReduxPage = () => {
    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(fetchAllContacts());
    }, [dispatch]);

    
    
    return (
        <div>
            <ContactForm />
        </div>
    )
}

export default HttpReduxPage