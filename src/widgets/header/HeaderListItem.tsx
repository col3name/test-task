import React from "react";

import {HeaderListItemProps} from "./header.props";

const HeaderListItem: React.FC<HeaderListItemProps> = ({
  isActive,
  children,
}) => {
  return <li className={ `header-list-item ${isActive && "header-list-item-active"} `}>
    { children }
  </li>
}

export default HeaderListItem;