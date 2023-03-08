import { ITextInput } from "./TextInput";

const text: ITextInput = {
  type: "text",
  name: "Grand Prix",
  isValid: true,
};

const number: ITextInput = {
  type: "number",
  name: "Top Speed",
  isValid: true,
};

const invalid: ITextInput = {
  type: "text",
  name: "Circuit",
  value: "Korea International Circuit",
  isValid: false,
  errorMsg: "Please enter valid circuit.",
};

export const mockInput = {
  text,
  number,
  invalid,
};
