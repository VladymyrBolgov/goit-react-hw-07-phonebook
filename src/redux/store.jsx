import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from './contactsSlice';
import { filterReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },
});
