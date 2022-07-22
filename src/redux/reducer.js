import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import contactsActions from "./actions";

const items = createReducer([], {
  [contactsActions.addContact]: (state, { payload }) => [payload, ...state],
  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [contactsActions.filter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
