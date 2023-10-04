import React from "react";

import {HeaderTitleProps} from "./header.props";

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  text
}) => {
  return <h1 className="header-title">{text}</h1>
}
export default HeaderTitle;