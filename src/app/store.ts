import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/slice";
import tasksReducer from "../features/tasks/slice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    tasks: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
