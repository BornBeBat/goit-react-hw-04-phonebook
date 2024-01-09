import { useState, useEffect } from 'react';

import { ContactForm, ContactList, Filter } from 'components';
import { AppContainer, MainTitle, SecondaryTitle } from './App.styled';
import { contacts_BASE } from 'utils';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));

    if (localContacts) {
      setContacts(localContacts);
    } else setContacts(contacts_BASE);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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

// export class OldApp extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   componentDidMount() {
//     const localContacts = JSON.parse(localStorage.getItem('contacts'));

//     if (localContacts) {
//       this.setState({ contacts: localContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const prevContacts = prevState.contacts;
//     const newContacts = this.state.contacts;

//     if (prevContacts.length !== newContacts.length) {
//       localStorage.setItem('contacts', JSON.stringify(newContacts));
//     }
//   }

//   updateFilter = event => {
// this.setState({ filter: event.target.value });
//   };

//   filterContacts = () => {
// return this.state.contacts.filter(elem =>
//   elem.name.toLowerCase().includes(this.state.filter.toLowerCase())
// );
//   };

// handleFormSubmit = data => {
//   const isExist = this.state.contacts.find(
//     elem => elem.name.toLowerCase() === data.name.toLowerCase()
//   );
//   if (isExist) {
//     alert(`${data.name} is already in contacts`);
//     return;
//   }
//   this.setState(prevState => ({
//     contacts: [...prevState.contacts, data],
//   }));
// };

//   hendleDeleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(elem => elem.id !== id),
//     }));
//   };

//   render() {
// return (
//   <AppContainer>
//     <MainTitle>Phonebook</MainTitle>
//     <ContactForm onSubmit={this.handleFormSubmit} />
//     <SecondaryTitle>Contacts</SecondaryTitle>
//     <Filter onChange={this.updateFilter} />
//     <ContactList
//       contacts={this.filterContacts()}
//       onClick={this.hendleDeleteContact}
//     />
//   </AppContainer>
// );
//   }
// }
