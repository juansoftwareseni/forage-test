import Cards from "@/components/Cards";
import { Context } from "@/layouts/PrivateLayout";
import useLoadPokemon from "@/service/useLoadPokemon";
import React, { useContext, useState, useEffect } from "react";
import { Pokemon } from "pokenode-ts";

function PokemonList() {
  const ctx = useContext(Context);
  const { data, isLoading } = useLoadPokemon(ctx.search);
  const [listFavorite, setListFavorite] = useState([]);
  const [isRefetch, setIsRefetch] = useState(false);

  const handleAddToFav = (data: Pokemon) => {
    if (
      listFavorite &&
      listFavorite.map((i: Pokemon) => i?.name).includes(data?.name as string)
    ) {
      const filteredData = listFavorite.filter(
        (i: Pokemon) => i.name !== data?.name
      );
      localStorage.setItem("favorite", JSON.stringify(filteredData));
    } else if (listFavorite === null) {
      localStorage.setItem("favorite", JSON.stringify([data]));
    } else if (listFavorite?.length) {
      localStorage.setItem("favorite", JSON.stringify([...listFavorite, data]));
    }
    setIsRefetch((prev) => !prev);
  };
  useEffect(() => {
    const listFavo: [] = JSON.parse(localStorage.getItem("favorite") as string);
    setListFavorite(listFavo);
  }, [isRefetch]);

  return (
    <div className="p-6">
      <h2 className="mb-6 text-lg font-normal">Pokemon List</h2>
      <div className="grid grid-cols-5 gap-4">
        {!isLoading &&
          data?.results?.map((i: any) => (
            <Cards
              name={i?.name}
              onClickFavorite={handleAddToFav}
              listFavorite={listFavorite}
            />
          ))}
      </div>
    </div>
  );
}

export default PokemonList;
