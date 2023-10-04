import React from "react";

interface CategoryTitleProps {
  text: string
}

const CategoryTitle: React.FC<CategoryTitleProps> = ({
  text
}) => {
  return <h3 className="list-item-col1-row1__title">{text}</h3>;
}

export default CategoryTitle;