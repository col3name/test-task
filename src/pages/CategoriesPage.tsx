/* VENDOR */
import { useSelector } from "react-redux";

/* APPLICATION */
import { CategoryListItem } from "../widgets/category/CategoryItem";

import { selectAllCategories } from "../features/categories/slice";

export const CategoriesPage = () => {
  const categories = useSelector(selectAllCategories);

  return (
    <ul>
      {categories.map((category) => (
        <CategoryListItem key={category.id} item={category} />
      ))}
    </ul>
  );
};
