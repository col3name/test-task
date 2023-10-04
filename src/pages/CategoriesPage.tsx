import { CategoryListItem } from "../widgets/category/CategoryItem";
import {useAllCategoriesSelector} from "../features/categories/hooks";

export const CategoriesPage = () => {
  const categories = useAllCategoriesSelector();

  return (
    <ul>
      {categories.map((category) => (
        <CategoryListItem key={category.id} item={category} />
      ))}
    </ul>
  );
};
