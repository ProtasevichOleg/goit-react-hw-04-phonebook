// ContactList.jsx
import React from 'react';
import ContactListItem from '../ContactListItem';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(contact => (
      <ContactListItem
        key={contact.id}
        name={contact.name}
        number={contact.number}
        onDelete={() => onDelete(contact.id)}
      />
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
