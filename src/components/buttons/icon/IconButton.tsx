import { Icon } from "../../primitives/Icon/Icon";

// * Define Types

// TODO you dont have to spec type per buttonstyles
export const enum IconButtonSizeType {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export const enum IconButtonColorType {
  primary = "primary",
  surface = "surface",
  transparent = "transparent",
}

export interface IIconButton {
  icon: string;
  size?: IconButtonSizeType;
  color?: IconButtonColorType;
  onClick?: () => void;
}

// * Define Styles
const IconButtonSizeStyle = {
  sm: "min-w-sm",
  md: "min-w-md",
  lg: "min-w-lg",
};

// TODO : This style is redundant with @TextButton
const IconButtonColorStyles = {
  primary:
    "bg-primary text-light hover:bg-primary-500 disabled:text-primary-300",
  surface: "bg-light-300 text-dark hover:bg-light-400 disabled:text-dark-100",
  transparent: "bg-transparent hover:bg-light disabled:text-dark-100",
};

const STYLE_ICONBUTTON = "aspect-1 rounded-full p-2";

// * Component
const IconButton = ({ icon, size, color, onClick }: IIconButton) => {
  return (
    <button
      className={`${STYLE_ICONBUTTON} ${
        IconButtonSizeStyle[size || IconButtonSizeType.sm]
      } ${IconButtonColorStyles[color] || IconButtonColorType.transparent}}`}
      onClick={onClick}
    >
      <Icon name={icon} />
    </button>
  );
};

export default IconButton;
