"use client";

import { useAnimeStore } from "@/context/AnilistProvider";
import { useEffect } from "react";
import Image from "next/image";
import { Badge } from "keep-react";

export default function AnimeDetailsPage() {
  const {
    animeDetails,
    fetchAnimeById,
    loading,
    animeId,
    favorites,
    addToFavorites,
    removeFromFavorites,
  } = useAnimeStore();

  useEffect(() => {
    if (animeId) {
      fetchAnimeById(Number(animeId));
    }
  }, [animeId, fetchAnimeById]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!animeDetails) {
    return <p>No anime details found.</p>;
  }

  const {
    coverImage,
    title,
    description,
    episodes,
    status,
    type,
    characters,
    id,
  } = animeDetails;

  const isFavorite = favorites.some(
    (favorite) => favorite.id === animeDetails.id,
  );

  return (
    <div className="mx-auto px-4 sm:max-w-screen-lg">
      <div className="relative w-full h-[40vh] overflow-hidden rounded-lg shadow-xl mb-6">
        <Image
          width={2000}
          height={800}
          alt={title.romaji}
          src={coverImage.large}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute top-[38%] left-6 transform -translate-y-1/2 z-20 sm:left-[24%]">
        <Image
          width={120}
          height={120}
          alt={title.romaji}
          src={coverImage.medium}
          className="border-4 border-white shadow-lg"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-[#2e2e2e]">
          {title.romaji}
        </h1>
      </div>

      <p className="text-lg text-[#2e2e2e] translate-y-[-10%] sm:mb-4 mt-[10%]">
        {description || "No description available."}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p className="text-[#2e2e2e]">
          <strong>Episodes:</strong> {episodes}
        </p>
        <p className="text-[#2e2e2e]">
          <strong>Status:</strong> {status}
        </p>
        <p className="text-[#2e2e2e]">
          <strong>Type:</strong> {type}
        </p>
      </div>
      <div className="mt-4">
        <Badge
          onClick={() => {
            if (isFavorite) {
              removeFromFavorites(id);
            } else {
              addToFavorites(animeDetails);
            }
          }}
          className={`cursor-pointer py-2 px-4 rounded-md ${isFavorite ? "bg-[#994ff3] text-[#fffffe]" : "bg-[#4fc4cf] text-[#2e2e2e]"}`}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Badge>
      </div>
      <div className="my-6">
        <h2 className="text-2xl text-[#2e2e2e] font-semibold mb-4">
          Characters
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {characters?.edges?.map(({ node }: any) => (
            <div key={node.id} className="flex flex-col items-center">
              <Image
                src={node.image?.large || "/default-avatar.png"}
                alt={node.name.full}
                width={100}
                height={100}
                className="mb-2 object-cover"
              />
              <p className="text-sm  text-[#2e2e2e] text-center">
                {node.name.full}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
