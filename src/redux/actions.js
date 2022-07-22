import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const addContact = createAction("contact/add", (data) => ({
  payload: {
    id: nanoid(5),
    name: data.name,
    number: data.number,
  },
}));

console.log(addContact("ggg", 121));

const deleteContact = createAction("contact/delete");

const filter = createAction("change/filter");

const contactsActions = { addContact, deleteContact, filter };

export default contactsActions;
