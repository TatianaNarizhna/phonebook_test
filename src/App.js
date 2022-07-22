import "modern-normalize/modern-normalize.css";
import Input from "./Input/Input";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";

function App() {
  return (
    <>
      <Input />
      <Filter />
      <Contacts />
    </>
  );
}

export default App;

// hooks
// function App() {
//   // const [contacts, setContacts] = useState(() => {
//   //   return JSON.parse(window.localStorage.getItem("contacts")) ?? "";
//   // });
//   // const [filter, setFilter] = useState("");

//   // useEffect(() => {
//   //   localStorage.setItem("contacts", JSON.stringify(contacts));
//   // }, [contacts]);

//   // const addContact = ({ name, number }) => {
//   //   const added = contacts.some((contact) => contact.name === name);

//   //   if (added) {
//   //     return alert(`${name} is already in Contacts`);
//   //   }

//   //   const contact = {
//   //     id: nanoid(5),
//   //     name,
//   //     number,
//   //   };

//   //   setContacts([contact, ...contacts]);
//   // };

//   // const onChangeFilter = (e) => {
//   //   setFilter(e.target.value);
//   // };

//   // const getVisibleContacts = () => {
//   //   const normalizedFilter = filter.toLowerCase();

//   //   return items.filter((item) =>
//   //     item.name.toLowerCase().includes(normalizedFilter)
//   //   );
//   // };

//   // const deleteContact = (id) => {
//   //   setContacts(contacts.filter((contact) => contact.id !== id));
//   // };

//   // const contactsList = getVisibleContacts();

//   return (
//     <>

//       {/* <Input onSubmit={addContact} /> */}
//       {/* <Filter filter={filter} onChange={onChangeFilter} /> */}
//       {/* <Contacts contacts={items} onDeleteContact={deleteContact} /> */}
//     </>
//   );
// }
