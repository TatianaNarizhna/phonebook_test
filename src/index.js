import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistorStore from "./redux/store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={persistorStore.store}>
      <PersistGate persistor={persistorStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
