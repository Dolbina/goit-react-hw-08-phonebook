import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ListWrap, ButtonWrap } from './ContactList.styled';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import {
  setContactsFilter,
  setIsLoading,
  setError,
} from 'redux/contacts/selector';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(setIsLoading);
  const error = useSelector(setError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(setContactsFilter);

  if (!filteredContacts?.length) {
    return <p>No contacts found.</p>;
  }
  return (
    <ListWrap>
      {isLoading && !error && <b>Request in progress...</b>}
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <ButtonWrap type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ButtonWrap>
        </li>
      ))}
    </ListWrap>
  );
};
