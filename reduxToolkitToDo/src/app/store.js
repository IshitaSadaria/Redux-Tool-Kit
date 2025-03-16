import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import counterReducer from "../features/todo/counterSlice";
import productSlice from "../features/todo/productsSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer,
    products: productSlice
  },
});