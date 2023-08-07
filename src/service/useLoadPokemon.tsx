import React, { useEffect, useState } from "react";
import { PokemonClient } from "pokenode-ts";

function useLoadPokemon(name: string) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const loadPokemon = async () => {
    const api = new PokemonClient();
    setIsLoading(true);
    await api
      .getPokemonByName(name)
      .then((res) => {
        if (Object.hasOwn(res, "results")) {
          setData(res);
        } else {
          setData({ results: [res] });
        }
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (name !== null && name !== undefined) {
      loadPokemon();
    }
  }, [name]);

  return { data, isLoading, isError };
}

export default useLoadPokemon;
