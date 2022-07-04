import React, { Component } from "react";
import "modern-normalize/modern-normalize.css";
import { nanoid } from "nanoid";
import Input from "./Input/Input";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const stateContacts = this.state.contacts;
    const added = stateContacts.some((state) => state.name === name);

    if (added) {
      return alert(`${name} is already in Contacts`);
    }

    const contact = {
      id: nanoid(5),
      name,
      number,
    };
    console.log(contact);

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  onChangeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    const contacts = this.getVisibleContacts();

    return (
      <>
        <Input onSubmit={this.addContact} />
        <Filter filter={filter} onChange={this.onChangeFilter} />
        <Contacts contacts={contacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
