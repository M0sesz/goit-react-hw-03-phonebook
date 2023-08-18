import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Phonebook/ContactForm';
import ContactList from './Phonebook/ContactList';
import Filter from './Phonebook/Filter';

const saveContactsToLocalStorage = contacts => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    setContacts(storedContacts);
  }, []);

  const handleAddContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`Contact with name "${newContact.name}" already exists.`);
      return;
    }

    const contactWithId = { ...newContact, id: nanoid() };
    const updatedContacts = [...contacts, contactWithId];
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts); // Зберігаємо контакти у localStorage
  };

  const handleDeleteContact = contactId => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts); // Зберігаємо контакти у localStorage
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        deleteContact={handleDeleteContact}
      />
    </>
  );
};

export default App;
