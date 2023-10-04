/* VENDOR */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

/* APPLICATION */

import "./Header.css";

import {
  HeaderItemType,
} from "./header.props";
import HeaderList from "./HeaderList";
import HeaderButton from "./HeaderButton";
import HeaderNav from "./HeaderNav";
import HeaderTitle from "./HeaderTitle";
import ModalCreateCategory from "../category/ModalCreateCategory";
import ModalCreateTask from "../tasks/ModalCreateTask";

export const Header = () => {
  const { pathname } = useLocation();
  const isCategories = pathname.includes("categories");

  const [createModalActive, setCreateModalActive] = useState<boolean>(false);
  const headerItems: HeaderItemType[] = [
    { isActive: !isCategories, link: "tasks", text: 'Задачи' },
    { isActive: isCategories, link: "categories", text: 'Категории' },
  ];
  const onOpenCreateModal =  () => {
    setCreateModalActive(true);
  };
  return (
    <header className="header">
      <HeaderTitle text="ToDo List" />
      <HeaderNav>
        <HeaderList items={ headerItems }/>
        <HeaderButton text={ isCategories ? "Добавить категорию" : "Добавить задачу"} onClick={ onOpenCreateModal } />
      </HeaderNav>
      { isCategories ? (
        <ModalCreateCategory
          active={ createModalActive }
          setActive={ setCreateModalActive }
        />
      ) : (
        <ModalCreateTask
          active={ createModalActive }
          setActive={ setCreateModalActive }
        />
      )}
    </header>
  );
};
