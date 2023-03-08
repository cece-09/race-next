import { Icon } from "../../primitives/Icon/Icon";

// * Define Types
export const enum TextButtonSizeType {
  sm = "sm",
  md = "md",
  lg = "lg",
  full = "full",
}

export const enum TextButtonColorType {
  primary = "primary",
  surface = "surface",
  transparent = "transparent",
}

export interface ITextButton {
  text: string;
  size?: TextButtonSizeType;
  icon?: string;
  color?: TextButtonColorType;
  disabled?: boolean;
  onClick?: () => void;
}

// * Define Styles
const STYLE_TEXTBUTTON =
  "rounded-full flex gap-2 items-center justify-center font-medium";

const TextButtonSizeStyles = {
  sm: "min-w-sm text-sm px-2 py-1",
  md: "min-w-md text-md px-3 py-2",
  lg: "min-w-lg text-md px-3 py-2",
  full: "w-full text-md px-3 py-2",
};

const TextButtonColorStyles = {
  primary:
    "bg-primary text-light hover:bg-primary-500 disabled:text-primary-300",
  surface: "bg-light-300 text-dark hover:bg-light-400 disabled:text-dark-100",
  transparent: "bg-transparent hover:bg-light disabled:text-dark-100",
};

// * Component
export const TextButton = ({
  text,
  size,
  icon,
  color,
  disabled,
  onClick,
}: ITextButton) => {
  return (
    <button
      className={`${STYLE_TEXTBUTTON} ${
        TextButtonSizeStyles[size || TextButtonSizeType.md]
      } ${TextButtonColorStyles[color || TextButtonColorType.transparent]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon ? <Icon name={icon} /> : <></>}
      {text ? <div>{text}</div> : <></>}
    </button>
  );
};
