import {
  IconButtonSizeType,
  IconButtonColorType,
  IIconButton,
} from "./IconButton";

const primary: IIconButton = {
  icon: "HiHome",
  size: IconButtonSizeType.sm,
  color: IconButtonColorType.primary,
};

const surface: IIconButton = {
  icon: "HiHome",
  size: IconButtonSizeType.sm,
  color: IconButtonColorType.surface,
};

const transparent: IIconButton = {
  icon: "HiHome",
  size: IconButtonSizeType.sm,
  color: IconButtonColorType.transparent,
};

export const mockIconButtonProps = { primary, surface, transparent };
