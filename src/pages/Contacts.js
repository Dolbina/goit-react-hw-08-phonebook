import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { setIsLoading } from 'redux/contacts/selector';
import { GlobalStyle } from '../components/GlobalStyle';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Layout } from 'components/Layout/Layout';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(setIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <div>
          <div>{isLoading && 'Request in progress...'}</div>
          <ContactList />
        </div>
        <GlobalStyle />
      </Layout>
    </>
  );
}
