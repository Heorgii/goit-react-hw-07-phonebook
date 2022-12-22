import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from './App.module.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm  />
      <h2 className={css.contact_title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;