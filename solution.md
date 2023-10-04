## Общее
- везде избавиться от инициализации объектов через запятую
- для props использовать props.ts лежащий рядом с компонентом
- внедрить compound component
- реализовать компоненты так чтобы они были одной уровня сложности, пример в ListItem
- для модальных окон и dropdown использовать порталы, чтобы избавить от бага с перекрытием последних другими элементами
- подключить React в функциональных компонентах где он не подключен но используется
- Props interface вынести в common/props.tsx

## Архитекутра
 - widgets/category
 - widgets/header
 - widgets/task
 - features/tasks
 - features/category
 - app/
 - shared/icons
 - shared/ui
- папку Header перенести в widgets/header
- ListItem перенести в shared/ui/listItem
- папку Modal перенсти в shared/ui/modal
- icons перенести в shared/ui/icons
- переименовать Lists в pages 
- разделить логику приложения и логику ui (вынести все dispatch в features)
- создать папку shared/ui с простыми элементами, HeaderLink, Button, HeaderListItem, Input, Checkbox and etc
например
```js
const Button = (onClick, alt, src) => {
    return (
      <button
        className="list-item-col2__btn"
        onClick={ onClick }
        >
          <img src={src} alt={alt} />
       </button>
    )
}
```

- логику работы с dispatch вынести в features в features/{name}/hooks.ts


## Ошибке в коде компонентов, рефакторинг
### ListItem.tsx
- ListItem -> CategoryItem и TaskItem тк логика их может изменяться независимо
- используя component bound ListItem разделить на ItemCard(ItemTitle, ItemCategory, ItemDescription), ItemActions, ItemButton,
- заменить let на const  ```let [removeModalActive, setRemoveModalActive] = useState(false);```

- добавить const перед ``` [editModalActive, setEditModalActive] = useState(false)```

- заменить  ``` removeModalActive = true;``` на ```setRemoveModalActive(true)```


### /src/Header/Header.css
- удалить закоментированный код (49-51 строки)
- 0px заменить на 0 (8 строка)

### src/Header/Header.tsx
- все props вынести в shared/ui/header/header.props.ts
- разделить на HeaderTitle, HeaderList, HeaderListItem, HeaderButton,
```js
const { pathname } = useLocation();
const isCategories = pathname.includes('categories');
const [createModalActive, setCreateModalActive] = useState(false);
```


- оптимизировать ```isCategories ? "header-list-item header-list-item-active" : "header-list-item"``` 
-> ```js "header-list-item ${isCategories && "header-list-item-active"}"```

```tsx
interface ListItemProps {
  children: React.ReactNode,
  isActive: boolean,
}

const HeaderList: React.FC<HeaderListProps> = ({
  items,
}) => {
  return (
    <ul className="header-list">
      { items.map(item => (
        <HeaderListItem isActive={ item.isActive }>
          <Link to={item.link}>{item.text}</Link>
        </HeaderListItem>
      ))}
    </ul>
  )
}
const ListItem: React.FC<ListItemProps> = ({
                                             isActive,
                                             children,
                                           }) => {
  return <li
    className={ `header-list-item ${isActive && "header-list-item-active"} `}
  >
    { children }
  </li>
}
// usage
const headerItems: HeaderItemType[] = [
  { isActive: !isCategories, link: "tasks", text: 'Задачи' },
  { isActive: isCategories, link: "categories", text: 'Категории' },
];
<HeaderList items={ headerItems }/>
```


### src/Modal
- тк model task и category в будущем может измениться стоит разделить ModalCreateItem на ModalCreateCategory и ModalCreateTask
 и ModalEditItem -> ModalEditCategory и ModelEditTask
- 
### src/Modal/Modal.css
- remove redundant px .modal__content boxShadow (26 line)
### src/Modal/Modal.tsx
- удалить item в ModalProps

### src/Modal/ModalDropdown.tsx
- сузить типы для option
- вынести ``` const selectedOption = options.find((option) => option.id === selected)?.name || "Выберите категорию";```
- использовать подход compoundComponent и разбить на DropdownLabel, DropdownButton, DropdownContent
- перенести для элементов modalDropdown и перенсти все связанное с ModalDropdown
- упростить ```selected ? "dropdown-btn" : "dropdown-btn placeholder"``` до `dropdown-btn ${ !selected && 'placeholder'}`
или использовать пакет classnames 
```js
cn('dropdown-btn', { ['placeholder']: !selected })
```
- создать DropdownButton(children, text,)
```tsx
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
```

```tsx
export const ModalDropdown: React.FC<ModalDropdownProps> = ({
  selected,
  setSelected,
}) => {
  const [isActive, setIsActive] = useState(false);
  const options = useSelector(selectAllCategories);
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
```

### ModalBtn.tsx 
convert
```ts  
const btnClass =
    type === "primary"
      ? size === "large"
        ? "modalbtn primary large"
        : "modalbtn primary"
      : "modalbtn";
```
into 
```ts
enum ModalBtnSize {
 Default,
 Large
}
enum ModalBtnType {
 Default,
 Primary
}

interface ModalBtnProps {
 type?: ModalBtnType;
 children: React.ReactNode;
 size?: ModalBtnSize;
 onClick: () => void;
}

const btnClass = `modalbtn ${type === ModalBtnType.Primary && "primary" } ${size === ModalBtnSize.Large && "large" }`

```
## Features
- 
### features/categoriesSlice.ts
- создать model.ts, actions.ts, hooks.ts, api.ts в будущем может понядобиться для взаимодействия с удаленными сервисами
- перенести features/categoriesSlice.ts в  features/categories/slice.ts
- CategoriesState -> CategoryState
### features/tasksSlice.ts
- создать model.ts, actions.ts, hooks.ts
- перенести features/tasksSlice.ts в  features/tasks/slice.ts
- CategoriesState -> TaskState
- удалить неспользуемые параметры i, arr``` let rm = (el: TaskState, i: number, arr: TaskState[]) ```
### app/store.tsx
- удалить неиспользуемый код AppThunk<ReturnType = void>
- заменить useDispatch на useAppDispatch, и useSelector на useAppSelector для подсказки типов либо удалить неиспользуемые useDispatch, useAppDispatch
- удалить неспользуемые параметры i, arr```  let rm = (el: CategoriesState, i: number, arr: CategoriesState[]) =>```  


