import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Phonebook/ContactForm';
import ContactList from './Phonebook/ContactList';
import Filter from './Phonebook/Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  componentDidMount() {
    const storedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    this.setState({ contacts: storedContacts });
  }

  saveContactsToLocalStorage = contacts => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  handleAddContact = newContact => {
    const { contacts } = this.state;
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
    this.setState({ contacts: updatedContacts });
    this.saveContactsToLocalStorage(updatedContacts);
  };

  handleDeleteContact = contactId => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    this.setState({ contacts: updatedContacts });
    this.saveContactsToLocalStorage(updatedContacts);
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
}

export default App;
