import { ISelectInput } from "./SelectInput";

const base: ISelectInput = {
  name: "Season",
  isOpen: false,
  value: null,
  enums: ["option1", "option2"],
};

const open: ISelectInput = {
  name: "Driver",
  isOpen: true,
  value: "Charles Leclerc",
  enums: ["Carlos Sainz", "Charles Leclerc", "Lewis Hamilton"],
};

export const mockSelect = {
  base,
  open,
};
