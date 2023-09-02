import { useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { useClickAway } from "@uidotdev/usehooks";
import {useOnClickOutside} from "usehooks-ts"

type Item = {
  id: number;
  value: string;
};
type Props = {
  title: string;
  items: Item[];
  multiselect?: boolean;
};

function CustomDropDown({ title, items, multiselect }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<Item[]>([]);
  const toggle = (value: boolean) => {
    setOpen(value);
  };

  const ref = useRef(null);
  const handleClickOutside = (() => {
    setOpen(false);
  });

  useOnClickOutside(ref, handleClickOutside)

  const handleOnClick = (item: Item) => {
    if (!selection?.some((current) => current?.id === item.id)) {
      if (!multiselect) {
        setSelection([item]);
      } else if (multiselect) {
        setSelection([...selection, item]);
      }
    }
    setOpen((value) => !value);
    // For multiselect
    // else {
    //     let selectionAfterRemoval = selection;
    //     selectionAfterRemoval = selectionAfterRemoval?.filter(
    //         current => current?.id !== item.id
    //     )
    //     setSelection([...selectionAfterRemoval])
    // }
  };

  //   function isItemInSelection(item: Item) {
  //     if(selection?.find(current => current?.id === item.id)){
  //         return true
  //     }
  //     return false
  //   }

  return (
    <div
      ref={ref}
      className={`dd-wrapper ${
        open
          ? "border solid rounded-xl border-[#3284FF] rounded-b-none"
          : "border solid rounded-xl border-[#3284FF]"
      }`}
    >
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold text-sm text-[#3284FF] font-sans">
            {selection.length > 0 ? selection[0]?.value : title}
          </p>
        </div>
        <div className="dd-header__action">
          <p>
            {open ? (
              <AiOutlineDown className="text-[#3284FF] duration-500 rotate-180" />
            ) : (
              <AiOutlineDown className="text-[#3284FF] rotate-0 duration-500" />
            )}
          </p>
        </div>
      </div>

      {open && (
        <ul className="dd-list">
          {items?.map((item: any, index) => (
            <li className="dd-list-item" key={item?.id}>
              <button
                type="button"
                onClick={() => handleOnClick(item)}
                className={`${index === 2 ? "disabled" : ""}`}
              >
                <span className="text-sm  font-sans font-medium">
                  {item?.value}
                </span>
                {index === 2 ? (
                  <FiLock size={12} className="icon" />
                ) : (
                  <span className="text-sm font-sans font-medium"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default CustomDropDown;
