/* VENDOR */
import React, { useState } from "react";

/* APPLICATION */
import down from "../../icons/down.svg";
import {useAllCategoriesSelector} from "../../../features/categories/hooks";
import {TaskId} from "../../../features/tasks/model";
import {CategoryId} from "../../../features/categories/model";

type OptionId = CategoryId | TaskId | undefined;
type SetSelectedType = React.Dispatch<React.SetStateAction<CategoryId>>;

interface ModalDropdownProps {
  selected: OptionId;
  setSelected: SetSelectedType;
}

interface OptionItemProps {
  setSelected: SetSelectedType;

  close: () => void,
  option: Option,
}

interface Option {
  id: OptionId,
  name: string,
}

const DropdownItem: React.FC<OptionItemProps> = ({
  setSelected,
  close,
  option
}) => {
  return (
    <div
      className="dropdown-item"
      onClick={() => {
        if (option.id) {
          setSelected(option.id);
        }
        close()
      }}
    >
      {option.name}
    </div>
  );
}
interface DropdownLabelProps {
  children: React.ReactNode,
}

const DropdownLabel: React.FC<DropdownLabelProps> = ({
  children,
}) => {
  return <span className="dropdown-label">{children}</span>
}

interface DropdownContentProps {
  children: React.ReactNode,
}

const DropdownContent: React.FC<DropdownContentProps> = ({
  children,
}) => {
  return <div className="dropdown-content">{ children }</div>
}
interface DropdownButtonProps {
  text: string,
  children?: React.ReactNode,
  isWarn: boolean
}
const DropdownButton: React.FC<DropdownButtonProps> = ({
  children,
  text,
  isWarn
}) => {
  return (
    <div className={`dropdown-btn ${ !isWarn && 'placeholder'}`}>
      { text }
      { children && children }
    </div>
  )
}
export const ModalDropdown: React.FC<ModalDropdownProps> = ({
  selected,
  setSelected,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const options = useAllCategoriesSelector();
  const onClose = () => setIsActive(false);

  const selectedOption = options.find((option) => option.id === selected)?.name ||
    "Выберите категорию";
  return (
    <div className="dropdown" onClick={() => setIsActive(!isActive)}>
      <DropdownLabel>Категория</DropdownLabel>
      <DropdownButton isWarn={ selected === undefined } text={selectedOption } >
        <img src={down} alt="open dropdown" />
      </DropdownButton>
      { isActive && (
        <DropdownContent>
          { options.map((option) => (
            <DropdownItem
              key={option.id}
              option={ option }
              setSelected={ setSelected }
              close={ onClose }
            />
          ))}
        </DropdownContent>
      )}
    </div>
  );
};
