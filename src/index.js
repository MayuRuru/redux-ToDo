import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import "./index.css";
import { extendedApiSlice } from "./features/notes/notesSlice_extended";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/api/apiSlice";

const container = document.getElementById("root");
const root = createRoot(container);

store.dispatch(extendedApiSlice.endpoints.getNotes.initiate());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

    {/* <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider> */}
  </React.StrictMode>
);
