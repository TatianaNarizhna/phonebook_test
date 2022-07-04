import s from "./Contacts.module.css";

function Contacts({ contacts, onDeleteContact }) {
  return (
    <div className={s.contacts}>
      <h2>Contacts</h2>
      <ul className={s.list}>
        {contacts.map(({ name, id, number }) => (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              type="button"
              className={s.button}
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
