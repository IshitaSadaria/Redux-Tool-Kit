//main part of store is to bring the configure and create the configurestore

import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"

export const store = configureStore({
    reducer: todoReducer
})

