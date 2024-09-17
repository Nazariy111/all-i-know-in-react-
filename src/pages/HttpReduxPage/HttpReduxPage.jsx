import { useEffect } from "react";
import ContactForm from "../../components/contactForm/contactForm";
import { fetchAllContacts } from "../../redux/httpRedux/httpReduxOperations"
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import { contactsSelector, filterWord } from "../../redux/httpRedux/httpReduxSelectors";
import FilterForm from "../../components/FilterForm/FilterForm";
import { filteredContacts1} from "../../redux/httpRedux/filterSlice";


const HttpReduxPage = () => {
    // const contacts = useSelector(contactsSelector);
    // const filter = useSelector(filterWord);
    const filteredContacts11 = useSelector(filteredContacts1);
    
    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(fetchAllContacts());
    }, [dispatch]);

    // const filteredContacts = contacts.filter(contact => contact.name.includes(filter.toLowerCase().trim()))
    
    
    
    
    return (
        <div>
            <ContactForm />
            <FilterForm />
            <ContactList contacts={ filteredContacts11} />
        </div>
    )
}

export default HttpReduxPage