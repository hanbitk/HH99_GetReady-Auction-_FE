import { configureStore } from "@reduxjs/toolkit";
import products from "../modules/products";

const store = configureStore({
  reducer: {
    products,
  },
});

export default store;