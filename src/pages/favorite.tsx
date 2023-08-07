import Header from "@/layouts/PrivateLayout/Header";
import FavoriteList from "@/views/HomePage/partials/FavoriteList";
import React from "react";

function Favorite() {
  return (
    <div className="bg-mainBlack min-h-screen">
      <Header />
      <div className=" -mt-[2px] text-white">
        <FavoriteList />
      </div>
    </div>
  );
}

export default Favorite;
