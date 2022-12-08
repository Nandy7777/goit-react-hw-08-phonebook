import PropTypes from 'prop-types';
import { Item, Button } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDelete = id => dispatch(deleteContact(id));

  return (
    <Item>
      <p>
        {name}: <span>{number}</span>
      </p>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
