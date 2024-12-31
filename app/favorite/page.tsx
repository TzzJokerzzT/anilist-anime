"use client";

import { NavbarComponent } from "@/components/Navbar/Navbar";
import { useAnimeStore } from "@/context/AnilistProvider";
import { Badge } from "keep-react";
import Image from "next/image";

export default function FavoritePage() {
  const { favorites, removeFromFavorites } = useAnimeStore();

  if (favorites.length === 0) {
    return <p>No favorites yet.</p>;
  }

  return (
    <>
      <NavbarComponent />
      <div className="mx-auto p-4">
        <h1 className="text-3xl font-bold text-[#2e2e2e] mb-6">Favorites</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((anime) => (
            <div
              key={anime.id}
              className="bg-white border-[#2e2e2e]  p-4 rounded-lg shadow-lg"
            >
              <div className="relative mb-4">
                <Image
                  src={anime.coverImage.large}
                  alt={anime.title.romaji}
                  className="object-cover w-full h-40 rounded-lg"
                />
                <div className="absolute top-2 right-2">
                  <Badge
                    onClick={() => removeFromFavorites(anime.id)}
                    className="cursor-pointer bg-red-500 text-white py-1 px-3 rounded-full"
                  >
                    Remove
                  </Badge>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {anime.title.romaji}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {anime.description.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
