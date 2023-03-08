import { ChangeEvent, useMemo } from "react";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";

// * Define Types
export interface ITextInput {
  name: string;
  isValid: boolean;
  errorMsg?: string;
  value?: string | number | readonly string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

// * Define Style
function getVailidStatusClasses(isValid) {
  return isValid ? "" : "border-red-500 border";
}

const STYLE_CONTAINER = "flex w-full items-center gap-3";
const STYLE_LABEL = "text-sm font-semibold";
const STYLE_INPUT = "text-sm rounded-md px-3 py-2 w-full";
const STYLE_ERROR = "text-xs font-light text-red-500 ml-1";

// * Component
export const TextInput = ({
  value,
  name,
  isValid,
  errorMsg,
  onChange,
}: ITextInput) => {
  const { width } = useWindowDimensions();

  const computedClasses = useMemo(() => {
    const validStatusClasses = getVailidStatusClasses(isValid);
    return validStatusClasses;
  }, [isValid]);

  return (
    <>
      <div className={`${STYLE_CONTAINER}`}>
        {width < 640 ? (
          <></>
        ) : (
          <label className={`${STYLE_LABEL}`} htmlFor={name}>
            {name}
          </label>
        )}
        <input
          id={name}
          className={`${STYLE_INPUT} ${computedClasses}`}
          placeholder={width < 640 ? name : ""}
          value={value}
          onChange={onChange}
        ></input>
      </div>
      {isValid ? <></> : <div className={`${STYLE_ERROR}`}>{errorMsg}</div>}
    </>
  );
};
