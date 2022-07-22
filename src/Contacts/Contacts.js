import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../redux/actions";
import { getVisibleContacts } from "../redux/selectors";
import s from "./Contacts.module.css";

function Contacts() {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(contactsActions.deleteContact(id));

  return (
    <div className={s.contacts}>
      <h2>Contacts</h2>
      <ul className={s.list}>
        {visibleContacts.map(({ name, id, number }) => (
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
