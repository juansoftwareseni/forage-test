import React from "react";
import PokemonList from "./partials/PokemonList";
import FavoriteList from "./partials/FavoriteList";

function Home() {
  return (
    <div className="bg-mainBlack">
      <PokemonList />
      <FavoriteList />
    </div>
  );
}

export default Home;
