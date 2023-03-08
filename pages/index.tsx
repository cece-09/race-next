import { ReactNode } from "react";
import { PrimaryLayout } from "../components/layouts/primary/PrimaryLayout";
import SidebarLayout, {
  ISidebarItemLayout,
} from "../components/layouts/sidebar/SidebarLayout";

export interface IIndexPage {
  sitename: string;
  sidebarItems: Array<ISidebarItemLayout>;
  children?: ReactNode;
}

export const IndexPage = ({ sitename, children, sidebarItems }: IIndexPage) => {
  return (
    <PrimaryLayout sitename={sitename}>
      <SidebarLayout sidebarItems={sidebarItems}></SidebarLayout>
      {children}
    </PrimaryLayout>
  );
};
