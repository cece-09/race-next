import { IContainer, ContainerType } from "./Container";

const overlay: IContainer = {
  type: ContainerType.overlay,
  children: "Hello World",
};

export const mockContainer = { overlay };
