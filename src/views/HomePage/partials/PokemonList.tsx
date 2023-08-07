import Cards from "@/components/Cards";
import { Context } from "@/layouts/PrivateLayout";
import useLoadPokemon from "@/service/useLoadPokemon";
import React, { useContext } from "react";

function PokemonList() {
  const ctx = useContext(Context);
  const { data, isLoading } = useLoadPokemon(ctx.search);
  return (
    <div className="p-6">
      <h2 className="mb-6 text-lg font-normal">Pokemon List</h2>
      <div className="grid grid-cols-5 gap-4">
        {!isLoading && data?.results?.map((i: any) => <Cards name={i?.name} />)}
      </div>
    </div>
  );
}

export default PokemonList;
