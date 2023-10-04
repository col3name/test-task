import React from "react";

import {HeaderNavProps} from "./header.props";

const HeaderNav: React.FC<HeaderNavProps> = ({
  children
}) => {
  return (
    <nav className="header-nav">
      { children }
    </nav>
  )
};

export default HeaderNav;
