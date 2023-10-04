import React from "react";
import {Link} from "react-router-dom";

import HeaderListItem from "./HeaderListItem";

import {HeaderListProps} from "./header.props";

const HeaderList: React.FC<HeaderListProps> = ({
  items,
}) => {
  return (
    <ul className="header-list">
      { items.map(item => (
        <HeaderListItem key={item.link} isActive={ item.isActive }>
          <Link to={item.link}>{item.text}</Link>
        </HeaderListItem>
      ))}
    </ul>
  )
}

export default HeaderList;