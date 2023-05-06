import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "Title",
      category: "Category",
      price: "CurrentPrice",
      deadline: "Deadline",
    },
    {
      id: 2,
      title: "Title2",
      category: "Category",
      price: "CurrentPrice",
      deadline: "Deadline",
    },
    {
      id: 3,
      title: "Title3",
      category: "Category",
      price: "CurrentPrice",
      deadline: "Deadline",
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    showProducts: (state) => {
      return { ...state };
    },
  },
});

export default productsSlice.reducer;
export const { showProducts } = productsSlice.actions;
