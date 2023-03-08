import { ChangeEvent, useContext, useMemo } from "react";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";

export interface ITextInput {
  type: "text" | "number" | "select";
  name: string;
  isValid: boolean;
  errorMsg?: string;
  value?: string | number | readonly string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function getVailidStatusClasses(isValid) {
  return isValid ? "" : "border-red-500 border";
}

const BASE_CONTAINER_CLASSES = "flex w-full items-center gap-3";
const BASE_LABEL_CLASSES = "text-sm font-semibold";
const BASE_INPUT_CLASSES = "text-sm rounded-md px-3 py-2 surface-input w-full";
const BASE_ERROR_CLASSES = "text-xs font-light text-red-500 ml-1";

export const TextInput = ({
  type,
  value,
  name,
  isValid,
  errorMsg,
  onChange,
}: ITextInput) => {
  const { width, height } = useWindowDimensions();

  const computedClasses = useMemo(() => {
    const validStatusClasses = getVailidStatusClasses(isValid);
    return validStatusClasses;
  }, [isValid]);

  return (
    <>
      <div className={`${BASE_CONTAINER_CLASSES}`}>
        {width < 640 ? (
          <></>
        ) : (
          <label className={`${BASE_LABEL_CLASSES}`} htmlFor={name}>
            {name}
          </label>
        )}
        <input
          id={name}
          className={`${BASE_INPUT_CLASSES} ${computedClasses}`}
          type={type}
          placeholder={width < 640 ? name : ""}
          value={value}
          onChange={onChange}
        ></input>
      </div>
      {isValid ? (
        <></>
      ) : (
        <div className={`${BASE_ERROR_CLASSES}`}>{errorMsg}</div>
      )}
    </>
  );
};
