import { useState } from 'react';

import { ContactForm, ContactList, Filter } from 'components';
import { AppContainer, MainTitle, SecondaryTitle } from './App.styled';
import { contacts_BASE, filterArray, useLocalStorage } from 'utils';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', contacts_BASE);
  const [filter, setFilter] = useState('');

  const handleSubmit = data => {
    const { name } = data;
    const isExist = contacts.find(elem => elem.name.toLowerCase() === name);
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, data]);
  };

  const updateFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const hendleDeleteContact = id => {
    setContacts(prev => prev.filter(elem => elem.id !== id));
  };

  return (
    <AppContainer>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSubmit={handleSubmit} />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter onChange={updateFilter} />
      <ContactList
        contacts={filterArray(contacts, filter)}
        onClick={hendleDeleteContact}
      />
    </AppContainer>
  );
};
