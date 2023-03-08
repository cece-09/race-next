import { ReactNode } from "react";

// * Define Types

export enum ContainerType {
  overlay = "overlay",
  primary = "primary",
  surface = "surface",
  transparent = "transparent",
}

export interface IContainer {
  type: ContainerType;
  children: ReactNode;
}

// * Define Styles
const ContainerStyle = {
  overlay:
    "w-screen h-screen absolute top-0 left-0 z-10 bg-black bg-opacity-80 flex items-center justify-center",
  primary: "",
  surface: "",
  transparent: "",
};

export const Container = ({ type, children }: IContainer) => {
  return <div className={`${ContainerStyle[type]}`}>{children}</div>;
};
