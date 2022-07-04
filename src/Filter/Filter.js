import s from "./Filter.module.css";

function Filter({ filter, onChange }) {
  return (
    <div className={s.label}>
      <label>
        Find contacts by name
        <input
          className={s.filter}
          type="text"
          value={filter}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Filter;
