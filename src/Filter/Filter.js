import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../redux/actions";
import { getFilter } from "../redux/selectors";
import s from "./Filter.module.css";

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = (e) =>
    dispatch(contactsActions.filter(e.target.value));

  return (
    <div className={s.label}>
      <label>
        Find contacts by name
        <input
          className={s.filter}
          type="text"
          value={filter}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
}

export default Filter;
