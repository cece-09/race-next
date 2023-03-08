import { ITextInput } from "./TextInput";

const text: ITextInput = {
  name: "Grand Prix",
  isValid: true,
};

const invalid: ITextInput = {
  name: "Circuit",
  value: "Korea International Circuit",
  isValid: false,
  errorMsg: "Please enter valid circuit.",
};

export const mockInput = {
  text,
  invalid,
};
