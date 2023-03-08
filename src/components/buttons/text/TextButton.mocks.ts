import {
  TextButtonColorType,
  TextButtonSizeType,
  ITextButton,
} from "./TextButton";

const sampleFunction = () => alert("Button Clicked");

const primary: ITextButton = {
  color: TextButtonColorType.primary,
  size: TextButtonSizeType.md,
  icon: "HiHome",
  text: "visit home",
  disabled: false,
  onClick: sampleFunction,
};

const surface: ITextButton = {
  color: TextButtonColorType.surface,
  size: TextButtonSizeType.md,
  icon: "HiHome",
  text: "visit home",
  disabled: false,
  onClick: sampleFunction,
};

const transparent: ITextButton = {
  color: TextButtonColorType.transparent,
  size: TextButtonSizeType.md,
  icon: "HiHome",
  text: "visit home",
  disabled: false,
  onClick: sampleFunction,
};

const disabled: ITextButton = {
  color: TextButtonColorType.primary,
  size: TextButtonSizeType.md,
  icon: "HiHome",
  text: "visit home",
  disabled: true,
  onClick: sampleFunction,
};

export const mockButton = { primary, surface, transparent, disabled };
