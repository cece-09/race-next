import { ISidebarLayout, ISidebarItemLayout } from "./SidebarLayout";

const sampleSidebarItems: Array<ISidebarItemLayout> = [
  { name: "home", icon: "HiHome" },
  { name: "race", icon: "GiSteeringWheel" },
  { name: "circuit", icon: "GiCheckeredFlag" },
  { name: "driver", icon: "GiFullMotorcycleHelmet" },
  { name: "constructor", icon: "TfiHeadphoneAlt" },
];

const loggedIn: ISidebarLayout = {
  sidebarItems: sampleSidebarItems,
  username: "Charles Leclerc",
};

const loggedOut: ISidebarLayout = {
  sidebarItems: sampleSidebarItems,
  username: null,
};

export const mockSidebarLayoutProps = {
  loggedIn,
  loggedOut,
};
