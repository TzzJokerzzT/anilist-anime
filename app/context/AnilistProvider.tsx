import {
  fetchAnimeById,
  fetchAnimes,
  fetchAnimesByQuery,
} from "@/services/fetchAnime";
import { Anime, AnimeStore, SearchState } from "@/types/anilist";
import { create } from "zustand";

export const useSearchStore = create<SearchState>((set) => ({
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  resetSearchTerm: () => set({ searchTerm: "" }),
}));

export const useAnimeStore = create<AnimeStore>((set, get) => ({
  popularAnimes: [],
  searchResults: [],
  loading: false,
  category: "ANIME",
  perPage: 18,
  page: 1,
  totalPages: 1160,
  allAnimes: [],
  currentPage: 1,
  animeDetails: null as Anime | null,
  animeId: parseInt(localStorage.getItem("animeId") || "0", 10),
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),

  addToFavorites: (anime: Anime) => {
    const favorites = get().favorites;

    if (!favorites.some((favorite) => favorite.id === anime.id)) {
      const updatedFavorites = [...favorites, anime];
      set({ favorites: updatedFavorites });

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  },

  removeFromFavorites: (animeId: number) => {
    const favorites = get().favorites;

    const updatedFavorites = favorites.filter((anime) => anime.id !== animeId);
    set({ favorites: updatedFavorites });

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  },
  fetchPopularAnimes: async (page?: number) => {
    set({ loading: true });
    const { perPage } = get();
    const currentPage = page || get().currentPage;
    const animes = await fetchAnimes(currentPage, perPage);

    set({
      popularAnimes: animes,
      currentPage,
      loading: false,
    });
  },

  searchAnimes: async (query: string, category: string) => {
    set({ loading: true, searchResults: [], allAnimes: [], page: 1 });
    const results = await fetchAnimesByQuery(query, category, 1);
    set({ searchResults: results, allAnimes: results, loading: false });
  },

  fetchAnimeById: async () => {
    const { animeId } = get();
    if (!animeId) return;
    set({ loading: true });

    const cachedAnimeDetails = localStorage.getItem(`animeDetails_${animeId}`);
    if (cachedAnimeDetails) {
      set({ animeDetails: JSON.parse(cachedAnimeDetails), loading: false });
      return;
    }

    const animeDetails = await fetchAnimeById(animeId);

    localStorage.setItem(
      `animeDetails_${animeId}`,
      JSON.stringify(animeDetails),
    );

    set({ animeDetails, loading: false });
  },

  setCategory: (newCategory: string) =>
    set({
      category: newCategory,
      page: 1,
      searchResults: [],
      allAnimes: [],
      loading: false,
    }),

  setPage: (page: number) => {
    set({ currentPage: page });
  },

  setID: (id: number) => {
    set({ animeId: id });
    localStorage.setItem("animeId", id.toString());
  },
}));
