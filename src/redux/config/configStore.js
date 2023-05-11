import { configureStore } from "@reduxjs/toolkit";
import products from "../modules/products";
import users from "../modules/users";

const store = configureStore({
  reducer: {
    products,
    users,
  },
});

export default store;