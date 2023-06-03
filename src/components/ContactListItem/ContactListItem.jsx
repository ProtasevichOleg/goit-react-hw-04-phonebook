// ContactListItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Item, DeleteButton } from './ContactListItem.styled';

const ContactListItem = ({ name, number, onDelete }) => (
  <Item>
    <p>
      {name}: {number}
    </p>
    <DeleteButton onClick={onDelete}>Delete</DeleteButton>
  </Item>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
