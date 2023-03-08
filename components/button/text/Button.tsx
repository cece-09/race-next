import { Icon } from "../../Icon/base/Icon";
import { useMemo } from "react";
import { IconBaseProps } from "react-icons";

export enum ButtonColorType {
  "primary",
  "surface",
  "transparent",
}

export type ButtonSizeType = "chip" | "full";

export interface IButton {
  text?: string;
  size?: ButtonSizeType;
  icon?: string;
  color?: ButtonColorType;
  disabled?: boolean;
  onClick?: () => void;
  iconProps?: IconBaseProps;
}

const BASE_BUTTON_CLASSES =
  "rounded-full flex gap-2 items-center justify-center font-medium";

const getSizeClasses = (size: ButtonSizeType) => {
  switch (size) {
    case "chip":
      return "w-sm aspect-square p-2 text-xl";
    case "full":
      return "w-full text-md px-3 py-2";
    default:
      return "w-md px-3 py-2";
  }
};

const getColorClasses = (color: ButtonColorType) => {
  switch (color) {
    case ButtonColorType.primary:
      return "bg-primary text-light hover:bg-primary-600 disabled:bg-primary-100 disabled:text-primary-200";
    case ButtonColorType.surface:
      return "bg-light-300 text-dark hover:bg-light-400 disabled:bg-light-300 disabled:text-dark-100";
    default:
      return "bg-transparent hover:bg-light disabled:bg-light disabled:text-light-500";
  }
};

export const Button = ({
  text,
  size,
  icon,
  color,
  disabled,
  onClick,
  iconProps,
}: IButton) => {
  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClasses(size);
    const colorClass = getColorClasses(color);
    return [sizeClass, colorClass].join(" ");
  }, [size, color]);

  return (
    <button
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon ? <Icon name={icon} props={iconProps} /> : <></>}
      {size === "chip" ? <></> : <div>{text ? text : "Button"}</div>}
    </button>
  );
};
