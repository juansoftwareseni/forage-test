import useLoadPokemon from "@/service/useLoadPokemon";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function DetailPage() {
  const query = useRouter().query;

  const { data } = useLoadPokemon(query?.name as string);

  if (data?.results.length === 0) return null;

  return (
    <div className="bg-mainBlack text-white min-h-screen">
      <div className="w-full flex justify-center h-full flex-col items-center">
        <Image
          src={data?.results[0]?.sprites.other?.dream_world.front_default}
          alt="pokemon-ava"
          layout="contain"
          width="400"
          height="400"
        />
        <h2 className="capitalize text-8xl">{data?.results[0]?.name}</h2>
      </div>
    </div>
  );
}

export default DetailPage;
