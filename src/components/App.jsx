import React, { useState, useEffect } from 'react';
import { ContactLst } from './ContactLst/ContactList';
import { Filter } from './Filter/Filter';
import { PhonebookForm } from './PhonebookForm/PhoneForm';
import { AppContainer } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    return parsedContacts || [];
  });
  const [filter, setFilter] = useState('');

  const deleteContacts = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleIputСhange = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleName = () => {
    const contactNormalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactNormalize)
    );
  };

  const addContacts = newContacts => {
    if (contacts.some(el => el.name === newContacts.name)) {
      alert(`${newContacts.name} is alredy in contacts`);
      return;
    }
    setContacts(prevState => {
      return [...prevState, newContacts];
    });
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <PhonebookForm onSubmit={addContacts} />
      <h2>Contacts</h2>
      <Filter onChange={handleIputСhange} filterValue={filter} />
      <ContactLst visibleName={getVisibleName()} onDelete={deleteContacts} />
    </AppContainer>
  );
};
