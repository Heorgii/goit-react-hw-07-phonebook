import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Notification from 'components/Notification/Notification';
// import { deleteItems } from 'redux/contactSlice'
import { deleteContact, fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selector';
import { getFilter } from 'redux/selector';
import { useEffect } from 'react';

const ContactList = () => {
    const filterInput = useSelector(getFilter);
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    const getContactsList = () => {
        const isAddedFilter = filterInput.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(isAddedFilter)
        );
    };

    const filtredList = getContactsList();

    return (
        <div className={css.list_box}>
            <ul className={css.list}>
                {filtredList.length > 0 ? (
                    filtredList.map(({ id, name, number }) => (
                        <li key={id} className={css.item}>
                            <p className={css.contact_name}>{name} ------------ {number}</p>

                            <button className={css.btn_delete_contact} type='submit' onClick={() => dispatch(deleteContact(id))}>Delete</button>
                        </li>
                    ))
                ) : (
                    <Notification message="Contact list is empty" />
                )}
            </ul>
        </div>

    );
}

export default ContactList;