import React, { Component } from 'react';
import { ContactLst } from './ContactLst/ContactList';
import { Filter } from './Filter/Filter';
import { PhonebookForm } from './PhonebookForm/PhoneForm';
import { AppContainer } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleIputСhange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getVisibleName = () => {
    const { filter, contacts } = this.state;
    const contactNormalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactNormalize)
    );
  };

  addContacts = newContacts => {
    this.setState(prevState => {
      if (this.state.contacts.some(el => el.name === newContacts.name)) {
        alert(`${newContacts.name} is alredy in contacts`);
      } else {
        return {
          contacts: [...prevState.contacts, newContacts],
        };
      }
    });
  };

  // Додаємо до state: контакти за умови що в LocalStorage щось є, інакше ігноруємо.
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const visibleName = this.getVisibleName();

    return (
      <AppContainer>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.addContacts} />
        <h2>Contacts</h2>
        <Filter
          onChange={this.handleIputСhange}
          filterValue={this.state.filter}
        />
        <ContactLst visibleName={visibleName} onDelete={this.deleteContacts} />
      </AppContainer>
    );
  }
}
