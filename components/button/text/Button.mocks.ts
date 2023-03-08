import { ButtonColorType, IButton } from "./Button";

const base: IButton = {
  color: ButtonColorType.primary,
  size: null,
  icon: "HiHeart",
  text: "Button",
  disabled: false,
  onClick: () => alert("Button Clicked"),
};

const chip: IButton = {
  color: ButtonColorType.surface,
  size: "chip",
  icon: "HiMenu",
  text: null,
  disabled: false,
  onClick: () => alert("Button Clicked"),
};

const full: IButton = {
  color: ButtonColorType.primary,
  size: "full",
  icon: null,
  text: "save differences",
  disabled: false,
  onClick: () => alert("Button Clicked"),
};

export const mockButton = {
  base,
  chip,
  full,
};
