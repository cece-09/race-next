import { ChangeEvent, useState } from "react";

export interface ISelectInput {
  name: string;
  isOpen: boolean;
  enums?: Array<string>;
  value?: string | number | readonly string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

const BASE_CONTAINER_CLASSES = "flex w-full items-center gap-3";
const BASE_LABEL_CLASSES = "text-sm font-semibold";
const BASE_INPUT_CLASSES = "text-sm rounded-md px-3 py-2 surface-input w-full";

export const SelectInput = ({
  name,
  isOpen,
  enums,
  value,
  onChange,
  onClick,
}: ISelectInput) => {
  const [select, setSelect] = useState(value);

  return (
    <div className={`${BASE_CONTAINER_CLASSES}`}>
      <label className={`${BASE_LABEL_CLASSES}`} htmlFor={name}>
        {name}
      </label>
      <div className="flex flex-col w-3/4 relative">
        <input
          className={`${BASE_INPUT_CLASSES}`}
          value={select}
          onClick={onClick}
          onChange={onChange}
        ></input>
        {isOpen ? (
          <div
            className={`absolute top-full w-full z-10 shadow-md rounded-md flex-col bg-white max-h-[200px] overflow-y-scroll`}
          >
            {enums.map((option, i) => (
              <button
                key={i}
                onClick={() => setSelect(option)}
                className="w-full px-3 py-2 text-sm border-b surface-border text-start"
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
