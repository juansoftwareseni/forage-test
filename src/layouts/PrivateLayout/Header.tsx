import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState, useRef } from "react";
import SearchIcon from "public/search.svg";
import { Context } from ".";

const listMenu = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Favorite",
    path: "/favorite",
  },
];

function Header() {
  const ctx = useContext(Context);
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className="flex justify-between px-6 py-3 bg-mainBlack z-30 text-white items-center">
      <div className="flex gap-10 items-center">
        <Image src="/Logo.svg" alt="logo" width={100} height={100} />
        <nav>
          <ul className="flex gap-5">
            {listMenu.map((i) => (
              <li key={i.path}>
                <Link href={i.path}>{i.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex gap-4 items-center">
        {isSearch ? (
          <input
            className="text-mainGrey px-2 py-1 rounded-md"
            placeholder="search name.."
            value={ctx.search}
            onChange={(e) => {
              ctx.setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setIsSearch(false);
              }
            }}
          />
        ) : (
          <SearchIcon
            onClick={() => {
              setIsSearch(true);
            }}
            className="h-[20px] w-[20px] fill-white cursor-pointer"
          />
        )}
        <div className="dropdown">
          <Image src="/img/avatar.png" width={30} height={30} alt="ava" />
          <div
            className="dropdown-content text-mainBlack cursor-pointer"
            onClick={() => {
              localStorage.removeItem("token");
              window.location = "/login" as unknown as Location;
            }}
          >
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
