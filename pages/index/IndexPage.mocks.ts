import { IIndexPage } from "..";
import { ISidebarItemLayout } from "../../components/layouts/sidebar/SidebarLayout";

const sampleSidebarItems: Array<ISidebarItemLayout> = [
  { name: "home", icon: "HiHome" },
  { name: "race", icon: "GiSteeringWheel" },
  { name: "circuit", icon: "GiCheckeredFlag" },
  { name: "driver", icon: "GiFullMotorcycleHelmet" },
  { name: "constructor", icon: "TfiHeadphoneAlt" },
];

const base: IIndexPage = {
  sitename: "Hello World!",
  sidebarItems: sampleSidebarItems,
};

export const mockIndexPageProps = {
  base,
};
