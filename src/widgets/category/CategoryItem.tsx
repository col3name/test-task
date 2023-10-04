/* VENDOR */
import React, {useState} from "react";

/* APPLICATION */
import {ModalEditCategory} from "./ModelEditCategory";
import {ModalRemoveCategory} from "./ModalRemoveCategory";
import CategoryCard from "../../features/categories/ui/categoryCard";
import CategoryActions from "../../features/categories/ui/categoryActions";

import {CategoryState} from "../../features/categories/model";


interface CategoryListItemProps {
  item: CategoryState
}

export const CategoryListItem: React.FC<CategoryListItemProps> = ({item}) => {
  const [editModalActive, setEditModalActive] = useState<boolean>(false)
  const [removeModalActive, setRemoveModalActive] = useState<boolean>(false);

  const onEdit = () => {
    setEditModalActive(true);
  };
  const onRemove = () => {
    setRemoveModalActive(true);
  }

  return (
    <>
      <li className="list-item">
        <CategoryCard item={ item }/>
        <CategoryActions onEdit={onEdit} onRemove={onRemove}/>
        <ModalEditCategory
          item={item}
          active={editModalActive}
          setActive={setEditModalActive}
        />
        <ModalRemoveCategory
          item={item}
          active={removeModalActive}
          setActive={setRemoveModalActive}
        />
      </li>
    </>
  );
};
