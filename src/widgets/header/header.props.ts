import React from "react";

export interface HeaderListItemProps {
  children: React.ReactNode,
  isActive: boolean,
}

export interface HeaderItemType {
  isActive: boolean,
  link: string,
  text: string
}

export interface HeaderListProps {
  items: HeaderItemType[],
}

export interface HeaderButtonProps {
  text: string,
  onClick: () => void,
}

export interface HeaderTitleProps {
  text: string,
}

export interface HeaderNavProps {
  children: React.ReactNode
}
