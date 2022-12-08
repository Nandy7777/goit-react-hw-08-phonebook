import ContactListItem from 'components/ContactListItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { List } from './ContactList.styled.js';

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </List>
  );
};

export default ContactList;
