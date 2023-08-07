import React, { useEffect, createContext, useState } from "react";
import Header from "./Header";
import { extractToken } from "@/utils/extractToken";

interface Props {
  children: React.ReactNode;
}

const url = "login" as unknown as Location;

export const Context = createContext({
  search: "",
  setSearch: (v: string) => {},
});

const PrivateLayout: React.FC<Props> = ({ children }) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    const isLoggedIn = extractToken();
    if (!isLoggedIn) {
      window.location = url;
    }
  }, []);
  return (
    <Context.Provider value={{ search: search, setSearch: setSearch }}>
      <div className=" min-h-screen">
        <div>
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </Context.Provider>
  );
};

export default PrivateLayout;
