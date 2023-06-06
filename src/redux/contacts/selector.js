export const setContacts = state => state.contacts;

export const setContactsFilter = state => {
  const { contacts, filter } = state;

  if (!filter) {
    return contacts.items;
  }
  const filterContacts = contacts.items?.filter(
    ({ name, number }) =>
      name?.trim().toLowerCase().includes(filter.toLowerCase()) ||
      number?.trim().includes(filter.toLowerCase())
  );

  return filterContacts;
};

export const setFilter = state => state.filter;

export const setIsLoading = state => state.isLoading;
export const setError = state => state.error;
