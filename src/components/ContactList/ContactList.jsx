
import {
  ContactListBox,
  ContactListItem,
  ContactListBtn,
  ContactListText,
} from './ContactList.styled';
import { selectContactsByName, selectLoadingStatus } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'components/Loader'

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsByName);
  const isLoading = useSelector(selectLoadingStatus);
 
  return (
    <ContactListBox>
      {isLoading && <Loader />}
      {contacts.map(({ id, name, phone }) => (
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


// const [news, setNews] = useState([])

  // useEffect(() => {
  //   const fetchNews = async() = {
  //     const data = await fetch(getNews);
  //     console.log(data);
  //     setNews(data);
  //   }
  //   fetchNews
  // }, [];)