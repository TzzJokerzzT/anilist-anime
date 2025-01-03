"use client";

import { CardComponent } from "@/components/Card/Card";
import { AnimeListProps } from "@/types/types";

export default function AnimeList({ animes }: AnimeListProps) {
  return (
    <ul className="flex justify-center items-center flex-wrap w-full h-full">
      {animes.map((anime) => (
        <li
          key={anime.id}
          className="p-2 flex flex-col items-center w-32 h-48 sm:w-40 sm:h-56 md:w-48 md:h-64 lg:w-56 lg:h-72 xl:w-64 xl:h-80"
        >
          <CardComponent
            id={anime.id}
            image={anime.coverImage.large}
            title={anime.title.romaji}
            description={anime.description}
            episodes={anime.episodes}
            type={anime.type}
            status={anime.status}
          />
          <p className="mt-2 text-sm font-medium text-[#2e2e2e] text-center truncate w-full cursor-pointer">
            {anime.title.romaji}
          </p>
        </li>
      ))}
    </ul>
  );
}
