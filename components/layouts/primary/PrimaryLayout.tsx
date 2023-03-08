import { Head } from "next/document";
import { ReactNode, useContext } from "react";
import { ThemeContext, ThemeType } from "../../../utils/ThemeProvider";
import { Button } from "../../button/text/Button";
import { UserContext } from "../../../utils/UserProvider";
import { Logo } from "../../../public/logo";
import { Profile } from "../../profile/base/Profile";
import Link from "next/link";

// type def
export interface IPrimaryLayout {
  sitename: string;
  children?: ReactNode;
}

// component
export const PrimaryLayout = ({ sitename, children }: IPrimaryLayout) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);

  const color = ThemeType[theme];
  const inverse = ThemeType[1 - theme];

  function handleTheme() {
    if (theme === ThemeType.light) setTheme(ThemeType.dark);
    else setTheme(ThemeType.light);
  }

  function handleUser() {
    const sample = { name: "daniel riccardo", profile: "/images/profile.jpeg" };
    if (!user) setUser(sample);
    else setUser(null);
  }

  const STYLE_THEME = `bg-${color} text-${inverse}`;
  const SYTLE_CONTAINER = "flex flex-col";
  const STYLE_FOOTER = `w-full p-3 text-gray-500 text-xs border-t border-${color}-400`;
  const STYLE_HEADER = `p-3 flex justify-between items-center border-b border-${color}-400 z-10`;
  const STYLE_LOGO = "fill-primary w-[80px] h-[20px]";
  const STYLE_NAME = "text-sm sm:text-base font-bold whitespace-nowrap";

  return (
    <>
      <Head>
        <title>{sitename}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className={`${STYLE_THEME}`}>
        <header className={`${STYLE_HEADER}`}>
          <Link href="/" className="flex gap-2">
            <Logo className={`${STYLE_LOGO}`} />
            <div className={`${STYLE_NAME}`}>{sitename.toUpperCase()}</div>
          </Link>
          <div className="w-full mx-10 max-w-[40%] gap-2 hidden sm:flex">
            <input
              type="search"
              className="w-full text-sm py-1 px-4 rounded-full"
              placeholder="Seach by race, driver, circuit ..."
            ></input>
            <Button size="chip" icon="GrFormSearch"></Button>
          </div>
          <div className="flex gap-2 items-center">
            {!user ? (
              <Button text="Sign In" onClick={handleUser} />
            ) : (
              <Profile name={user.name} profile={user.profile} />
            )}
            <Button size="chip" icon="HiOutlineMenu"></Button>
          </div>
        </header>
        <main className={`${SYTLE_CONTAINER}`}>{children}</main>

        <footer className={`${STYLE_FOOTER}`}>
          <Button
            size="chip"
            onClick={handleTheme}
            icon="HiLightningBolt"
          ></Button>
          <div>Formula 1 Race Review by @CECE </div>
        </footer>
      </div>
    </>
  );
};
