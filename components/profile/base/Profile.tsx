import { useState } from "react";
import Image from "next/image";

export interface IProfile {
  name: string;
  profile: string;
}

const STYLE_PROFILE_IMAGE = "rounded-full hover:shadow-sm";
const STYLE_PROFILE_CONTAINER =
  "hidden relative md:flex gap-2 items-center rounded-md px-2 py-1";
const STYLE_PROFILE_MODAL =
  "absolute p-5 top-full right-0 mt-1 z-100 rounded-md shadow-md whitespace-nowrap";

export const Profile = ({ name, profile }: IProfile) => {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <>
      <div className={`${STYLE_PROFILE_CONTAINER}`}>
        <Image
          src={profile}
          alt={name}
          width={35}
          height={35}
          className={`${STYLE_PROFILE_IMAGE}`}
          onClick={handleToggle}
        />
        {!toggle ? (
          <></>
        ) : (
          <div className={`${STYLE_PROFILE_MODAL}`}>
            Hello,{" "}
            <strong>
              {name
                .split(" ")
                .map((each) => each.charAt(0).toUpperCase() + each.slice(1))
                .join(" ")}
            </strong>
            <div>notice</div>
            <div>setting</div>
            <div>log out</div>
          </div>
        )}
      </div>
    </>
  );
};
