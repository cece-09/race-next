import { TextButtonColorType } from "../../buttons/text/TextButton";
import { IModalLayout } from "./ModalLayout";

const base: IModalLayout = {
  buttonProps: {
    text: "Create New",
    icon: "HiHome",
    color: TextButtonColorType.primary,
  },
  children: "This is modal content",
};

export const mockModalLayoutProps = { base };
