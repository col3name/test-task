/* VENDOR */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

/* APPLICATION */
import { RootState } from "../../app/store";

export interface CategoryState {
  id: string;
  name: string;
  description: string;
}

const initialState: CategoryState[] = [
  {
    id: "d485a644-5a24-4f55-b3f7-a083338be879",
    name: "Категория",
    description: "Описание может быть длинным",
  },
  {
    id: "52f7451a-0f06-4ddc-affa-b1d8ed24aee3",
    name: "Категория2",
    description: "Описание может быть длинным",
  },
  {
    id: "36704c57-4575-4112-b962-948b04a20506",
    name: "Категория3",
    description: "Описание может быть длинным",
  },
];

export const slice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoriesAdded: (state, action) => {
      state.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    categoriesUpdated: (state, action) => {
      const { id, name, description } = action.payload,
        existingCategory = state.find((category) => category.id === id);

      if (existingCategory) {
        existingCategory.name = name;
        existingCategory.description = description;
      }
    },
    categoriesRemoved: (
      state: CategoryState[],
      action: PayloadAction<string>
    ) => {
      const rm = (el: CategoryState) => el.id === action.payload;
      const rmTaskIndex = state.findIndex(rm);

      state.splice(rmTaskIndex, 1);
    },
  },
});

export const { categoriesAdded, categoriesUpdated, categoriesRemoved } =
  slice.actions;

export const selectAllCategories = (state: RootState) => state.categories;
export const findCategoryById = (categories: CategoryState[], id: string) => categories.find((it) => it.id === id)?.name;
export default slice.reducer;
