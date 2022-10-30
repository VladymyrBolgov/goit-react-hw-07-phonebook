import React, { useEffect } from 'react';
import { Container } from './Container.styled'
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
    return (
      <>
          <section >
            <Container >
              <h1>Phonebook</h1>
              <ContactForm />
              <h2>Contacts</h2>
              <Filter />
              <ContactList />
            </Container>
            </section>
      </>
    );
  }

export default App;




