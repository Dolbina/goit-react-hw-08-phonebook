import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ListWrap, ButtonWrap } from './ContactList.styled';
import { deleteContact, fetchContacts } from 'redux/operations';
import { getContactsFilter, getIsLoading, getError } from 'redux/selector';


export const ContactList = () => {
const dispatch = useDispatch();
const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  
useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch]);
  
  const filteredContacts = useSelector(getContactsFilter);
  
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

