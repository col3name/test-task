import React from "react";

import { ModalInput } from "./ModalInput";
import { ModalDropdown } from "./ModalDropdown";
import {CategoryId} from "../../../features/categories/model";

interface ModalRowProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  selected: CategoryId | undefined;
  setSelected: React.Dispatch<React.SetStateAction<CategoryId>>;
}

export const ModalRow: React.FC<ModalRowProps> = ({
  name,
  setName,
  selected,
  setSelected,
}) => {
  return (
    <div className="modal__content_row">
      <ModalInput name={name} setName={setName} />
      <ModalDropdown selected={selected} setSelected={setSelected} />
    </div>
  );
};
