import Cards from "@/components/Cards";
import React, { useState, useEffect } from "react";

function FavoriteList() {
  const [listFavorite, setListFavorite] = useState([]);
  useEffect(() => {
    const listFavo: [] = JSON.parse(localStorage.getItem("favorite") as string);
    setListFavorite(listFavo);
  }, []);

  return (
    <div className="p-6">
      <h2 className="mb-6 text-lg font-normal">Pokemon List</h2>
      <div className="grid grid-cols-5 gap-4">
        {listFavorite?.map((i: any) => (
          <Cards name={i?.name} />
        ))}
      </div>
    </div>
  );
}

export default FavoriteList;
