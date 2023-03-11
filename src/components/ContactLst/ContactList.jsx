import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { ListItem } from './ContactList.styled';
import { BtnDelete } from './ContactList.styled';

export const ContactLst = ({ visibleName, onDelete }) => {
  return (
    <List>
      {visibleName.map(contact => {
        return (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <BtnDelete onClick={() => onDelete(contact.id)}> Delete</BtnDelete>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactLst.prototype = {
  visibleName: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onDelete: PropTypes.func.isRequired,
};
