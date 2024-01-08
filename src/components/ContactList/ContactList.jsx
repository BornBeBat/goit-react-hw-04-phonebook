import PropTypes from 'prop-types';
import { Item, List, Text } from './ContactList.styled';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <button onClick={() => onClick(id)}>Delete</button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propsTupe = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};
