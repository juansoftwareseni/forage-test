import joinClass from "@/utils/joinClass";
import React, { useEffect, useState } from "react";
import { PokemonClient, Pokemon } from "pokenode-ts";
import Image from "next/image";
import Link from "next/link";
import HeartFilledPinkIcon from "public/heart-filled-pink.svg";
import HeartFilledGreyIcon from "public/heart-filled-grey.svg";

interface IProps {
  className?: string;
  name: string;
  onClickFavorite: (v: Pokemon) => void;
  listFavorite: any;
}

function Cards({ className, name, onClickFavorite, listFavorite }: IProps) {
  const [data, setData] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState(true);

  const loadPokemon = async () => {
    const api = new PokemonClient();
    await api
      .getPokemonByName(name)
      .then((res) => {
        setData(res);
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadPokemon();
  }, [name]);

  if (isLoading) return null;

  return (
    <div
      className={joinClass(
        "relative rounded-[4px] shadow-sm shadow-gray-50 min-h-[60px] w-full flex flex-col gap-4 p-4",
        className
      )}
    >
      <Link
        href={(data?.name as unknown as Location) || ""}
        className="flex-1 w-full"
      >
        <div className="flex w-full justify-center items-center flex-col h-full">
          <Image
            src={data?.sprites.other?.dream_world.front_default || ""}
            width="100"
            height="100"
            alt={`pokemon-${data?.name}`}
          />
          <h3 className="capitalize">{data?.name}</h3>
        </div>
      </Link>

      <div className="absolute top-1 lg:top-3 right-3">
        <button
          onClick={() => {
            onClickFavorite(data as Pokemon);
          }}
          className="right-0 z-10"
        >
          {listFavorite
            ?.map((i: Pokemon) => i?.name)
            .includes(data?.name as string) ? (
            <HeartFilledPinkIcon />
          ) : (
            <HeartFilledGreyIcon />
          )}
        </button>
      </div>
    </div>
  );
}

export default Cards;
