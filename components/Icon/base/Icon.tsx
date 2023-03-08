import loadable from "@loadable/component";
import { IconBaseProps } from "react-icons";

export interface IIcon {
  name: string;
  props?: IconBaseProps;
}

export const Icon = ({ name, props }: IIcon) => {
  const lib = name
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLocaleLowerCase();

  const ElementIcon = loadable(() => import(`react-icons/${lib}/index.js`), {
    resolveComponent: (el: JSX.Element) => el[name as keyof JSX.Element],
  });
  return <ElementIcon {...props} />;
};
