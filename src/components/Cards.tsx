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
}

function Cards(props: IProps) {
  const [data, setData] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState(true);
  const [isRefetch, setIsRefetch] = useState(true);

  const [listFavorite, setListFavorite] = useState([]);
  const loadPokemon = async () => {
    const api = new PokemonClient();
    await api
      .getPokemonByName(props.name)
      .then((res) => {
        setData(res);
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleAddToFav = () => {
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
    loadPokemon();
  }, [props.name]);

  useEffect(() => {
    const listFavo: [] = JSON.parse(localStorage.getItem("favorite") as string);
    setListFavorite(listFavo);
  }, [isRefetch]);

  if (isLoading) return null;

  return (
    <div
      className={joinClass(
        "relative rounded-[4px] shadow-sm shadow-gray-50 min-h-[60px] w-full flex flex-col gap-4 p-4",
        props.className
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
            handleAddToFav();
          }}
          className="right-0 z-10"
        >
          {listFavorite
            .map((i: Pokemon) => i?.name)
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
