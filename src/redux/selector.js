export const getContacts = state => state.contacts;

export const getContactsFilter = state => {
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

export const getFilter = state => state.filter;

export const getIsLoading = state => state.isLoading;
export const getError = state => state.error;
