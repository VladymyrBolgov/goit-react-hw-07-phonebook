import {
  ContactListBox,
  ContactListItem,
  ContactListBtn,
  ContactListText,
} from './ContactList.styled';
import { selectContacts, selectFilterValue, selectLoadingStatus } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'components/Loader'

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoadingStatus);
  const filter = useSelector(selectFilterValue);

  const filterContactsOnChange = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  };
  const sortContactsByName = () =>
  [...filterContactsOnChange()].sort((firstContact, secondContact) =>
    firstContact.name.localeCompare(secondContact.name)
  )

  return (
    <ContactListBox>
      {isLoading && <Loader />}
      {sortContactsByName().map(({ id, name, phone }) => (
        <ContactListItem key={id}>
          <ContactListText>Name: {name}</ContactListText>
          <ContactListText>Number: {phone}</ContactListText>
          <ContactListBtn
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Remuve
          </ContactListBtn>
        </ContactListItem>
      ))}
    </ContactListBox>
  );
};

export default ContactList;
