import { useState, useEffect } from 'react';

import { ContactForm, ContactList, Filter } from 'components';
import { AppContainer, MainTitle, SecondaryTitle } from './App.styled';
import { contacts_BASE } from 'utils';

export const App = () => {
  /**
   * State
   */
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? contacts_BASE
  );
  const [filter, setFilter] = useState('');
  /**
   * Effect
   */
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  /**
   * reworked Class Metods
   */
  const handleFormSubmit = data => {
    const isExist = contacts.find(
      elem => elem.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isExist) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, data]);
  };

  const updateFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterContacts = () => {
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const hendleDeleteContact = id => {
    setContacts(prev => prev.filter(elem => elem.id !== id));
  };

  return (
    <AppContainer>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSubmit={handleFormSubmit} />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter onChange={updateFilter} />
      <ContactList contacts={filterContacts()} onClick={hendleDeleteContact} />
    </AppContainer>
  );
};
