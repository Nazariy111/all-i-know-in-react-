import ContactListItem from "../ContactListItem/ContactListItem"

import css from './ContactList.module.css'

const ContactList = ({contacts}) => {
    

    return (
        <div className={css.listWrapper}>
            <ul className={css.list}>
                {contacts.map((contact) => {
                    return (<li key={contact.id}><ContactListItem contact={contact } /></li>)
                })}
            </ul>
        </div>
    )
}

export default ContactList