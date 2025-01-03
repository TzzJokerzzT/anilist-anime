"use client";

import SearchForm from "@/components/Form/SearchForm";
import { PaginationComponent } from "@/components/Pagination/Pagination";
import { SelectComponent } from "@/components/Select/Select";
import { SpinnerComponent } from "@/components/Spinner/Spinner";
import { useAnimeStore } from "@/context/AnilistProvider";
import { useEffect } from "react";
import AnimeList from "./AnimeListPage";

export const revalidate = 60;

export default function Homeview() {
  const {
    popularAnimes,
    searchResults,
    loading,
    fetchPopularAnimes,
    searchAnimes,
    category,
    currentPage,
  } = useAnimeStore();

  useEffect(() => {
    fetchPopularAnimes(currentPage);
  }, [fetchPopularAnimes]);

  const handleSearch = async (query: string) => {
    await searchAnimes(query, category);
  };

  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="mt-8">
        <div className="flex flex-row sm:flex-row items-center mb-4">
          <h2 className="m-1 text-[#2e2e2e] text-xl font-bold">Buscar Anime</h2>
          <SelectComponent />
        </div>
        <SearchForm onSearch={handleSearch} />
      </div>

      {loading ? (
        <SpinnerComponent />
      ) : (
        <div className="mt-8">
          {searchResults.length > 0 ? (
            <AnimeList animes={searchResults} />
          ) : (
            <>
              <h1 className="text-2xl text-[#2e2e2e] font-bold">
                Animes Populares
              </h1>
              <AnimeList animes={popularAnimes} />
            </>
          )}
        </div>
      )}
      <PaginationComponent />
    </main>
  );
}
