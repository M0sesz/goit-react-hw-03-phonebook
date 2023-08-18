import React from 'react';
import { DeleteButton } from './Form.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.number}
          <DeleteButton onClick={() => deleteContact(contact.id)}>
            Delete
          </DeleteButton>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
