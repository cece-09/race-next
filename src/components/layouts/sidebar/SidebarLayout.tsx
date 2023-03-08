import { useContext } from "react";
import { UserContext } from "../../../utils/UserProvider";
import { Icon } from "../../primitives/Icon/Icon";
import Image from "next/image";
import Link from "next/link";
import {
  TextButton,
  TextButtonColorType,
  TextButtonSizeType,
} from "../../buttons/text/TextButton";

export interface ISidebarItemLayout {
  name: string;
  icon: string;
  onClick?: () => void;
}

export interface ISidebarLayout {
  sidebarItems: Array<ISidebarItemLayout>;
  username?: string;
}

const STYLE_SIDEBAR =
  "hidden sm:flex flex-col p-4 gap-3 max-w-[250px] justify-center border-r border-light-300";
const STYLE_SIDEBAR_ITEM =
  "w-full flex py-4 px-3 gap-3 rounded-md items-center text-sm font-semibold hover:bg-primary-100 hover:text-primary";
const STYLE_SIDEBAR_PROFILE =
  "hover:bg-light px-3 py-2 rounded-md text-sm flex gap-3 items-center";

const SidebarItemLayout = ({ name, icon, onClick }: ISidebarItemLayout) => {
  return (
    <button className={`${STYLE_SIDEBAR_ITEM}`} onClick={onClick}>
      <Icon name={icon} props={{ size: "1.2rem" }} />
      {name[0].toUpperCase() + name.slice(1)}
    </button>
  );
};

export const SidebarLayout = ({ sidebarItems }: ISidebarLayout) => {
  const { user, setUser } = useContext(UserContext);

  function handleUser() {
    const sample = { name: "daniel riccardo", profile: "/images/profile.jpeg" };
    if (!user) setUser(sample);
    else setUser(null);
  }

  return (
    <div className={`${STYLE_SIDEBAR}`}>
      <section className={`${STYLE_SIDEBAR_PROFILE}`}>
        {user ? (
          <>
            <Image
              src={user.profile}
              width={40}
              height={40}
              alt={user.name}
              className="rounded-full"
            ></Image>
            <div>
              <div className="font-semibold">
                {user.name
                  .split(" ")
                  .map((each) => each.charAt(0).toUpperCase() + each.slice(1))
                  .join(" ")}
              </div>
              <div className="text-xs text-dark-200">F1 Enthusiast</div>
            </div>
          </>
        ) : (
          <TextButton
            text="sign in"
            color={TextButtonColorType.primary}
            size={TextButtonSizeType.md}
          />
        )}
      </section>
      <hr />
      <section className={`py-5`}>
        {sidebarItems.map((item) => (
          <SidebarItemLayout
            key={item.name}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </section>
      <hr />
      <section className={`p-2 flex flex-col gap-1`}>
        <Link
          href="/"
          className={`text-dark-200 text-xs flex items-center gap-1 hover:text-dark-100`}
        >
          <Icon name="FiSettings" /> manage my account
        </Link>
      </section>
    </div>
  );
};
