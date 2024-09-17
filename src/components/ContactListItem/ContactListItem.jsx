import { useDispatch } from 'react-redux';
import css from './ContactListItem.module.css';
import { deleteContact } from '../../redux/httpRedux/httpReduxOperations';

const ContactListItem = ({ contact }) => {
    const { name, number, id } = contact;
    const dispatch = useDispatch();
    

    const onDelete = () => { 
        console.log(id);
        
        dispatch(deleteContact(id));
    };
    
    return (
        <div className={css.contactWrapper}>
            <div className={css.infoWrapper}>
                <p>{name}</p>
                <p>{number}</p>
            </div>
            
            <button type='button' onClick={onDelete}>delete</button>
        </div>
    )
}

export default ContactListItem;