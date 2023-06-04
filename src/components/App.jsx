// App.jsx

import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Layout from './layout';
import { MainTitle, SubTitle } from './Titles';
import useLocalStorage from 'hooks/useLocalStorage';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const handleSearchInputChange = ({ target: { name, value } }) => {
    setFilter(value);
  };

  const valueExists = (key, value) => {
    if (key === 'name') {
      const normalizedValue = value.toLowerCase();
      return contacts.find(
        contact => contact[key].toLowerCase() === normalizedValue
      );
    }

    return contacts.find(contact => contact[key] === value);
  };

  const handleAddContact = (name, number) => {
    if (valueExists('name', name)) {
      alert(`${name} вже є в контактах.`);
      return false;
    }

    if (valueExists('number', number)) {
      alert(`Номер ${number} вже використовується.`);
      return false;
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    setContacts(prevContacts => [...prevContacts, newContact]);

    return true;
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDelete = contactToRemoveId => {
    setContacts(prevContacts =>
      prevContacts.filter(
        currentContact => currentContact.id !== contactToRemoveId
      )
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Layout>
      <MainTitle title="Phonebook" />
      <ContactForm onSubmit={handleAddContact} />
      <SubTitle title="Contacts" />
      <Filter value={filter} onChange={handleSearchInputChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </Layout>
  );
};

export default App;
