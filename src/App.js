import { useState, useEffect } from "react";
import "modern-normalize/modern-normalize.css";
import { nanoid } from "nanoid";
import Input from "./Input/Input";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? "";
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const added = contacts.some((contact) => contact.name === name);

    if (added) {
      return alert(`${name} is already in Contacts`);
    }

    const contact = {
      id: nanoid(5),
      name,
      number,
    };

    setContacts([contact, ...contacts]);
  };

  const onChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const contactsList = getVisibleContacts();

  return (
    <>
      <Input onSubmit={addContact} />
      <Filter filter={filter} onChange={onChangeFilter} />
      <Contacts contacts={contactsList} onDeleteContact={deleteContact} />
    </>
  );
}

export default App;
