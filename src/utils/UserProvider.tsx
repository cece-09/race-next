import { Dispatch, SetStateAction, createContext, useState } from "react";

export type UserType = {
  name: string;
  profile: string;
};

interface IUserContext {
  user?: UserType;
  setUser?: Dispatch<SetStateAction<UserType>>;
}

export const UserContext = createContext<IUserContext>({});

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState({
    name: "daniel riccardo",
    profile: "/images/profile.jpeg",
  } as UserType);

  const defaultContext: IUserContext = { user, setUser };
  return (
    <UserContext.Provider value={defaultContext}>
      {children}
    </UserContext.Provider>
  );
};
